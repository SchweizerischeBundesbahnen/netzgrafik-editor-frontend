import { AuthConfig } from 'angular-oauth2-oidc';
import { Environment } from './environment.model';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const authConfig: AuthConfig = {
  issuer: 'http://localhost:8081/realms/netzgrafikeditor',
  // The ClientId you received from the IAM Team
  clientId: 'netzgrafikeditor',
  // For production with Angular i18n the language code needs to be included in the redirectUri.
  // In your environment.prod.ts (or similar, but not your environment.ts) replace it with the following line:
  // redirectUri: location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1) + 1)
  // Note that these URIs must also be added to allowed redirect URIs in Azure (e.g. https://your-domain/en/, https://your-domain/de/, ...)
  redirectUri: location.origin,
  responseType: 'code',
  scope: 'openid profile email offline_access',
};

export const environment: Environment = {
  production: false,
  label: 'local',
  backendUrl: 'http://localhost:8080',
  authConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
