import {Component} from "@angular/core";
import {AuthService} from "./services/auth/auth.service";
import {environment} from "../environments/environment";
import packageJson from "../../package.json";
import {Observable} from "rxjs";
import {ProjectDto} from "./api/generated";

@Component({
  selector: "sbb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  readonly disableBackend = environment.disableBackend;

  version = packageJson.version;
  environmentLabel = environment.label;
  authenticated: Promise<unknown>;

  projectInMenu: Observable<ProjectDto | null>;

  get userName() {
    if (this.disableBackend) {
      return undefined;
    }
    return this.authService.claims?.name;
  }

  get email() {
    if (this.disableBackend) {
      return undefined;
    }
    return this.authService.claims?.email;
  }

  constructor(private authService: AuthService) {
    if (!this.disableBackend) {
      this.authenticated = authService.initialized;
    }
  }

  logout() {
    if (!this.disableBackend) {
      this.authService.logOut();
    }
  }
}
