ARG NGINX_VERSION=1.20.2
ARG VERSION
ARG APP_NAME=netzgrafik-frontend
ARG APP_CONTEXT_PATH=netzgrafik-frontend

# Build Stage used to download software (with credentials if necessary) and prepare environment for the final docker image
FROM cloud.docker.bin.sbb.ch/cloud/plattform-nginx:${NGINX_VERSION} as build

ARG ARTIFACTORY_USER
ARG ARTIFACTORY_PW
ARG APP_NAME
ARG VERSION

WORKDIR /
ADD https://${ARTIFACTORY_USER}:${ARTIFACTORY_PW}@bin.sbb.ch/artifactory/api/npm/pfi.npm/${APP_NAME}/-/${APP_NAME}-${VERSION}.tgz ${APP_NAME}.tar.gz

# Stage for the resulting docker image, no credentials may be used in this stage or it will apear in the docker image
# Dockerfile for ESTA WebJS
FROM cloud.docker.bin.sbb.ch/cloud/plattform-nginx:${NGINX_VERSION}

ARG VERSION
ARG APP_NAME
ARG APP_CONTEXT_PATH

# Download ngssc binary
ADD https://github.com/kyubisation/angular-server-side-configuration/releases/download/v15.0.2/ngssc_64bit /usr/sbin/ngssc
RUN chmod +x /usr/sbin/ngssc

# Add ngssc script
ADD ngssc.sh ./nginx-start/
RUN sed -i "s/CONTEXT_PATH/${APP_CONTEXT_PATH}/g" ./nginx-start/ngssc.sh

# copy artifact downloaded in build stage
COPY --from=build ${APP_NAME}.tar.gz ${APP_NAME}.tar.gz

RUN chmod +r ${APP_NAME}.tar.gz

# Extract and move to nginx html folder
# IMPORTANT: Use the -m option to set the data modification time of extracted files to the extraction time, rather than the data modification time stored in the archive.
#            This is necessary because when building the archive using the pipeline-helpers, the modification timestamp is always set to the same fixed date. This interferes
#            with the 'no-cache' Cache-Control HTTP header setting for telling the user agent to cache files, unless the modified timestamp of the cached files changed.
RUN tar -xzmf ${APP_NAME}.tar.gz && \
    chmod -R +r ./package && \
    mkdir ${APP_CONTEXT_PATH} && \
    ls -la ./package/dist && \
    # Don't abort on empty matches
    shopt -s nullglob && \
    # ngssc requires write permission for html and ngsw.json files
    # If your html file is not index.html, change it accordingly
    find ./package -name "index.html" -exec chmod a+w {} \; && \
    find ./package -name "ngsw.json" -exec chmod a+w {} \; && \
    mv ./package/dist/en-CH ./package/dist/en && \
    mv ./package/dist/de-CH ./package/dist/de && \
    mv ./package/dist/fr-CH ./package/dist/fr && \
    mv ./package/dist/it-CH ./package/dist/it && \
    mv ./package/dist/* . && \
    rm -f ${APP_NAME}.tar.gz && \
    rm -rf ./package && \
    ls -R -la

ADD nginx-location.conf "${NGINX_DEFAULT_CONF_PATH}/"
RUN sed -i "s/CONTEXT_PATH/${APP_CONTEXT_PATH}/g" "${NGINX_DEFAULT_CONF_PATH}/nginx-location.conf"

# Validate the nginx configuration
RUN nginx -t

USER 1001
