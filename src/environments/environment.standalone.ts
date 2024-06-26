import {Environment} from "./environment.model";

export const environment: Environment = {
  production: false,
  label: "standalone",
  backendUrl: "http://localhost:8080",
  disableBackend: true,
  customElement: true,
};
