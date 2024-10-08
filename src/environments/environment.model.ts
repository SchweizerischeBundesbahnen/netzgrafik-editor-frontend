import {AuthConfig} from "angular-oauth2-oidc";

export interface Environment {
  production: boolean;
  label?: string;
  backendUrl?: string;
  authConfig?: AuthConfig;
  disableBackend: boolean;
  customElement: boolean;
  standalonedemo: boolean;
}
