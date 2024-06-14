import {Component, Input, Output} from "@angular/core";
import {AuthService} from "./services/auth/auth.service";
import {TrainrunService} from "./services/data/trainrun.service";
import {TrainrunSectionService} from "./services/data/trainrunsection.service";
import {DataService} from "./services/data/data.service";
import {environment} from "../environments/environment";
import packageJson from "../../package.json";
import {Observable, merge} from "rxjs";
import {ProjectDto} from "./api/generated";
import {NetzgrafikDto} from "./data-structures/business.data.structures";
import {Operation} from "./models/operation.model";

@Component({
  selector: "sbb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  readonly disableBackend = environment.disableBackend;

  version = $localize`:@@app.version:Version` + " " + packageJson.version;
  userGuide = $localize`:@@app.user-guide:User Guide`;

  locale = localStorage.getItem("locale");
  
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

  constructor(private authService: AuthService,
              private dataService: DataService,
              private trainrunService: TrainrunService,
              private trainrunSectionService: TrainrunSectionService) {
    if (!this.disableBackend) {
      this.authenticated = authService.initialized;
    }
  }

  logout() {
    if (!this.disableBackend) {
      this.authService.logOut();
    }
  }

  changeLocale(locale: string) {
    // Store the user's preferred locale in localStorage
    localStorage.setItem("locale", locale);

    // Reload the page to apply the new locale
    location.reload();
  }

  @Input()
  get netzgrafikDto() {
    return this.dataService.getNetzgrafikDto();
  }

  set netzgrafikDto(netzgrafikDto: NetzgrafikDto) {
    this.dataService.loadNetzgrafikDto(netzgrafikDto);
  }

  @Output()
  operation: Observable<Operation> = merge(this.trainrunService.operation, this.trainrunSectionService.operation);
}
