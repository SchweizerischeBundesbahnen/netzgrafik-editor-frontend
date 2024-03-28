import {Component, HostListener, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from "rxjs";
import {
  debounceTime,
  filter,
  map,
  mergeMap,
  startWith,
  takeUntil,
} from "rxjs/operators";
import {
  ProjectControllerBackendService,
  ProjectDto,
  ProjectSummaryDto,
  VariantControllerBackendService,
  VariantSummaryDto,
} from "../../../api/generated";
import {SbbDialog} from "@sbb-esta/angular/dialog";
import {ProjectDialogComponent} from "../../project/project-dialog/project-dialog.component";
import {NavigationParameters} from "../../../utils/navigation-parameters";
import {NetzgrafikDefault} from "../../../sample-netzgrafik/netzgrafik.default";
import {VariantDialogComponent} from "../variant-dialog/variant-dialog.component";
import {ConfirmationDialogParameter} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";
import {UiInteractionService} from "../../../services/ui/ui.interaction.service";
import {UntypedFormControl} from "@angular/forms";
import {NavigationService} from "../../../services/ui/navigation.service";
import {VersionControlService} from "../../../services/data/version-control.service";
import {SlotAction} from "../../action-menu/action-menu/action-menu.component";

@Component({
  selector: "sbb-variants-view",
  templateUrl: "./variants-view.component.html",
  styleUrls: ["./variants-view.component.scss"],
})
export class VariantsViewComponent implements OnDestroy {
  readonly projectSubject = new ReplaySubject<ProjectDto>(1);
  project?: ProjectDto;
  searchControl = new UntypedFormControl("");
  showArchiveControl = new UntypedFormControl(false);
  searchQuery = new BehaviorSubject("");

  readonly variants = combineLatest([
    this.projectSubject,
    this.searchQuery,
    this.showArchiveControl.valueChanges.pipe(startWith(false)),
  ])
    .pipe(
      map(([project, searchQuery, showArchive]) =>
        project.variants.filter((v: VariantSummaryDto) => {
          if (!searchQuery) {
            return v.isArchived === showArchive;
          }
          return (
            v.isArchived === showArchive &&
            this.getTitleCurrentVersion(v)
              .toLocaleLowerCase()
              .includes(searchQuery)
          );
        }),
      ),
    )
    .pipe(
      map((variantSummaryDto) =>
        variantSummaryDto.sort(this.sortByPVariantSummaryDtoName),
      ),
    );

  readonly projectDataActions: Observable<SlotAction[] | undefined> =
    this.projectSubject.pipe(
      map((project) => {
        if (project.isWritable) {
          return [
            {
              name: "Projekt bearbeiten",
              icon: "pen-small",
              action: () => this.onEditProjectClicked(),
            },
            {
              name: "Projekt archivieren",
              icon: "archive-box-small",
              action: () => this.onArchiveProjectClicked(),
            },
          ];
        } else if (project.isDeletable && project.isArchived) {
          return [
            {
              name: "Archivierung rückgängig machen",
              icon: "arrow-circle-eye-small",
              action: () => this.onUnarchiveProjectClicked(),
            },
            {
              name: "Projekt löschen",
              icon: "trash-small",
              action: () => this.onDeleteProjectClicked(),
            },
          ];
        } else {
          return undefined;
        }
      }),
    );

  private readonly destroyed = new Subject<void>();

  private sortByPVariantSummaryDtoName(
    a: VariantSummaryDto,
    b: VariantSummaryDto,
  ) {
    // prettier-ignore
    if(a.latestSnapshotVersion && b.latestSnapshotVersion) {
      if(a.latestSnapshotVersion.name === b.latestSnapshotVersion.name) return 0;
      return [a.latestSnapshotVersion.name] > [b.latestSnapshotVersion.name] ? 1 : -1;
    }
    if (a.id === b.id) return 0;
    return [a.id] > [b.id] ? 1 : -1;
  }

  constructor(
    private readonly projectService: ProjectControllerBackendService,
    private readonly variantBackendService: VariantControllerBackendService,
    private readonly activatedRoute: ActivatedRoute,
    readonly navigationService: NavigationService,
    private readonly dialog: SbbDialog,
    private readonly uiInteractionService: UiInteractionService,
    private versionControlService: VersionControlService,
  ) {
    activatedRoute.params
      .pipe(
        takeUntil(this.destroyed),
        map((params) => new NavigationParameters(params)),
        mergeMap((params) => projectService.getProject(params.getProjectId())),
      )
      .subscribe((project) => this.updateProject(project));

    this.searchControl.valueChanges
      .pipe(takeUntil(this.destroyed), debounceTime(300))
      .subscribe((query) =>
        this.searchQuery.next(query.trim().toLocaleLowerCase()),
      );
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  @HostListener("mousemove", ["$event"])
  public onMouseMove(event$: MouseEvent) {
    event$.stopPropagation();
    event$.preventDefault();
    if (event$.buttons === 1) {
      const ele = document.documentElement;
      ele.scrollTop = ele.scrollTop + event$.movementY;
    }
    window.getSelection().removeAllRanges();
  }

  getVariantDataActions(variant: VariantSummaryDto): Observable<SlotAction[]> {
    if (variant.isArchived) {
      return of([
        {
          name: "Archivierung rückgängig machen",
          icon: "arrow-circle-eye-small",
          action: () => this.onUnarchiveVariantClicked(variant),
        },
      ]);
    }
    return of([
      {
        name: "Archivieren",
        icon: "archive-box-small",
        action: () => this.onArchiveVariantClicked(variant),
      },
    ]);
  }

  onArchiveVariantClicked(variantToEdit: VariantSummaryDto) {
    this.uiInteractionService
      .showConfirmationDiagramDialog(
        new ConfirmationDialogParameter(
          "Variante archivieren",
          "Möchten Sie die Variante jetzt archivieren?",
        ),
      )
      .pipe(
        filter((confirmed) => confirmed),
        takeUntil(this.destroyed),
      )
      .subscribe((project) => {
        this.versionControlService
          .archiveVariantWithId(variantToEdit.id)
          .subscribe(() => {
            this.projectService
              .getProject(variantToEdit.projectId)
              .subscribe((projectTdo) => this.updateProject(projectTdo));
          });
      });
  }

  onUnarchiveVariantClicked(variantToEdit: VariantSummaryDto) {
    this.uiInteractionService
      .showConfirmationDiagramDialog(
        new ConfirmationDialogParameter(
          "Archivierung rückgängig machen",
          "Möchten Sie die Archivierung der Variante rückgängig machen?",
        ),
      )
      .pipe(
        filter((confirmed) => confirmed),
        takeUntil(this.destroyed),
      )
      .subscribe((project) => {
        this.versionControlService
          .unarchiveVariantWithId(variantToEdit.id)
          .subscribe(() => {
            this.projectService
              .getProject(variantToEdit.projectId)
              .subscribe((projectTdo) => this.updateProject(projectTdo));
          });
      });
  }

  onAddVariantClicked(): void {
    VariantDialogComponent.open(this.dialog, {name: ""})
      .pipe(
        takeUntil(this.destroyed),
        mergeMap((model) => this.createVariant(this.project.id, model.name)),
      )
      .subscribe((variantId) =>
        this.navigationService.navigateToEditor(this.project.id, variantId),
      );
  }

  onEditProjectClicked(): void {
    ProjectDialogComponent.open(this.dialog, this.project)
      .pipe(
        mergeMap((project) =>
          this.projectService.updateProject(this.project.id, project),
        ),
        mergeMap(() => this.projectService.getProject(this.project.id)),
        takeUntil(this.destroyed),
      )
      .subscribe((project) => this.updateProject(project));
  }

  onArchiveProjectClicked(): void {
    this.uiInteractionService
      .showConfirmationDiagramDialog(
        new ConfirmationDialogParameter(
          "Projekt archivieren",
          "Möchten Sie das Projekt jetzt archivieren?",
        ),
      )
      .pipe(
        filter((confirmed) => confirmed),
        mergeMap(() => this.projectService.archiveProject(this.project.id)),
        mergeMap(() => this.projectService.getProject(this.project.id)),
        takeUntil(this.destroyed),
      )
      .subscribe((project) => this.updateProject(project));
  }

  onUnarchiveProjectClicked(): void {
    this.uiInteractionService
      .showConfirmationDiagramDialog(
        new ConfirmationDialogParameter(
          "Archivierung rückgängig machen",
          "Möchten Sie die Archivierung des Projekts rückgängig machen?",
        ),
      )
      .pipe(
        filter((confirmed) => confirmed),
        mergeMap(() => this.projectService.unarchiveProject(this.project.id)),
        mergeMap(() => this.projectService.getProject(this.project.id)),
        takeUntil(this.destroyed),
      )
      .subscribe((project) => this.updateProject(project));
  }

  onDeleteProjectClicked(): void {
    this.uiInteractionService
      .showConfirmationDiagramDialog(
        new ConfirmationDialogParameter(
          "Projekt löschen",
          "Möchten Sie das Projekt und alle enthaltenen Varianten endgültig löschen? " +
          "Diese Aktion kann nicht rückgängig gemacht werden.",
        ),
      )
      .pipe(
        filter((confirmed) => confirmed),
        mergeMap(() => this.projectService.deleteProject(this.project.id)),
        takeUntil(this.destroyed),
      )
      .subscribe(() => this.navigationService.navigateToProjects());
  }

  getTitleCurrentVersion(variant: VariantSummaryDto): string {
    const archivedSuffix = variant.isArchived ? " (archiviert)" : "";

    if (variant.latestSnapshotVersion) {
      return variant.latestSnapshotVersion.name + "*" + archivedSuffix;
    }

    if (variant.latestReleaseVersion) {
      return variant.latestReleaseVersion.name + archivedSuffix;
    }

    throw new Error("Unexpected data: No snapshot and no released version.");
  }

  getChangedAtCurrentVersion(variant: VariantSummaryDto): Date {
    if (variant.latestSnapshotVersion) {
      return new Date(variant.latestSnapshotVersion.createdAt);
    }

    if (variant.latestReleaseVersion) {
      return new Date(variant.latestReleaseVersion.createdAt);
    }

    throw new Error("Unexpected data: No snapshot and no released version.");
  }

  private updateProject(project: ProjectDto): void {
    this.project = project;
    this.projectSubject.next(project);
  }

  private createVariant(projectId: number, name: string): Observable<number> {
    return this.variantBackendService.createVariant(projectId, {
      initialModel: JSON.stringify(NetzgrafikDefault.getDefaultNetzgrafik()),
      initialName: name,
    });
  }
}
