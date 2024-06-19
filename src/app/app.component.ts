import {Component, Input, Output} from "@angular/core";
import {AuthService} from "./services/auth/auth.service";
import {TrainrunService} from "./services/data/trainrun.service";
import {TrainrunSectionService} from "./services/data/trainrunsection.service";
import {DataService} from "./services/data/data.service";
import {environment} from "../environments/environment";
import packageJson from "../../package.json";
import {Observable} from "rxjs";
import {ProjectDto} from "./api/generated";
import {NetzgrafikDto} from "./data-structures/business.data.structures";

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

  constructor(private authService: AuthService, private trainrunService: TrainrunService, private trainrunSectionService: TrainrunSectionService, private dataService: DataService) {

    /*trainrunService.trainruns.subscribe((value) => {
      console.log('trainrunService', value);
    });

    trainrunSectionService.trainrunSections.subscribe((value) => {
      console.log('trainrunSectionService', value);
    });*/

    /*trainrunSectionService.trainrunSectionCreated.subscribe((trainrunSection) => {
      console.log('trainrunSectionCreated', trainrunSection);
    });*/

    if (!this.disableBackend) {
      this.authenticated = authService.initialized;
    }
  }

  logout() {
    if (!this.disableBackend) {
      this.authService.logOut();
    }
  }

  @Input()
  get dto() {
    return this.dataService.getNetzgrafikDto();
  }
  set dto(dto: NetzgrafikDto) {
    this.dataService.loadNetzgrafikDto(dto);
  }

  @Output()
  trainrunSectionOperation = this.trainrunSectionService.trainrunSectionOperation;
}
