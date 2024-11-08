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
import {LabelService} from "./services/data/label.serivce";
import {NodeService} from "./services/data/node.service";

@Component({
  selector: "sbb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  readonly disableBackend = environment.disableBackend;
  readonly version = packageJson.version;
  readonly environmentLabel = environment.label;
  readonly authenticated: Promise<unknown>;

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
              private trainrunSectionService: TrainrunSectionService,
              private nodeService: NodeService,
              private labelService: LabelService,
            ) {
    this.language = localStorage.getItem("i18nLng");
    if (!this.disableBackend) {
      this.authenticated = authService.initialized;
    }
  }

  logout() {
    if (!this.disableBackend) {
      this.authService.logOut();
    }
  }

  changeLanguage(language: string) {
    localStorage.setItem("i18nLng", language);
    this.language = language;
    location.reload();
  }

  @Input() language: string;

  @Input()
  get netzgrafikDto() {
    return this.dataService.getNetzgrafikDto();
  }

  set netzgrafikDto(netzgrafikDto: NetzgrafikDto) {
    this.dataService.loadNetzgrafikDto(netzgrafikDto);
  }

  @Output()
  operation: Observable<Operation> = merge(
    this.trainrunService.operation,
    this.trainrunSectionService.operation,
    this.nodeService.operation,
    this.labelService.operation,
  );
}
