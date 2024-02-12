import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {Trainrun} from '../../../../models/trainrun.model';
import {TrainrunService} from '../../../../services/data/trainrun.service';
import {TrainrunSectionService} from '../../../../services/data/trainrunsection.service';
import {UiInteractionService} from '../../../../services/ui/ui.interaction.service';
import {ConfirmationDialogParameter} from '../../confirmation-dialog/confirmation-dialog.component';
import {DataService} from '../../../../services/data/data.service';
import {LabelService} from '../../../../services/data/label.serivce';
import {LabelRef} from '../../../../data-structures/business.data.structures';
import {LabelGroupService} from '../../../../services/data/labelgroup.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SbbChipEvent, SbbChipInputEvent} from '@sbb-esta/angular/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'sbb-trainrun-filter-tab',
  templateUrl: './trainrun-filter-tab.component.html',
  styleUrls: ['./trainrun-filter-tab.component.scss'],
})
export class TrainrunFilterTabComponent implements OnInit, OnDestroy {
  @Output() trainrunDeleted = new EventEmitter<void>();

  public selectedTrainrun: Trainrun;
  public trainrunLabels: string[];
  trainrunLabelsAutoCompleteOptions: string[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA];
  private destroyed = new Subject<void>();

  constructor(
    public dataService: DataService,
    private trainrunService: TrainrunService,
    private trainrunSectionService: TrainrunSectionService,
    private labelService: LabelService,
    private labelGroupService: LabelGroupService,
    private uiInteractionService: UiInteractionService,
    private cd: ChangeDetectorRef,
  ) {
    this.initializeWithCurrentSelectedTrainrun();
  }

  ngOnInit() {
    this.trainrunSectionService.trainrunSections
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.updateTrainrunLabelsAutoCompleteOptions();
      });
    this.updateTrainrunLabelsAutoCompleteOptions();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  remove(chipEvent: SbbChipEvent): void {
    const valueDelete = chipEvent.chip.value as string;
    const value = (valueDelete || '').trim();
    if (!value) {
      return;
    }
    this.trainrunLabels = this.trainrunLabels.filter(
      (labels) => labels !== valueDelete,
    );
    this.trainrunService.setLabels(
      this.selectedTrainrun.getId(),
      this.trainrunLabels,
    );
  }

  add(inputEvent: SbbChipInputEvent): void {
    const value = (inputEvent.value || '').trim();
    if (!value) {
      return;
    }
    console.log('add', value);
    this.trainrunLabels.push(value);
    this.trainrunService.setLabels(
      this.selectedTrainrun.getId(),
      this.trainrunLabels,
    );
    inputEvent.chipInput!.clear();
  }

  onDeleteTrainrun() {
    const dialogTitle = 'Löschen';
    const dialogContent = 'Soll der gesamte Zuglauf definitiv gelöscht werden?';
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.trainrunSectionService.deleteAllTrainrunSectionsOfTrainrun(
            this.selectedTrainrun.getId(),
          );
          this.trainrunDeleted.emit();
        }
      });
  }

  onDuplicateTrainrun() {
    this.trainrunService.duplicateTrainrun(this.selectedTrainrun.getId());
    this.initializeWithCurrentSelectedTrainrun();
  }

  onLabelsFocusout() {
    const keyboardEvent = new KeyboardEvent('keydown', {
      code: 'Enter',
      key: 'Enter',
      charCode: 13,
      keyCode: 13,
      view: window,
      bubbles: true,
    });
    document.getElementById('trainrunLabelsInput').dispatchEvent(keyboardEvent);
    this.trainrunService.setLabels(
      this.selectedTrainrun.getId(),
      this.trainrunLabels,
    );
  }

  getAutoCompleteLabels(): string[] {
    return this.labelGroupService.getAutoCompleteLabels(
      this.trainrunLabels,
      LabelRef.Trainrun,
    );
  }

  private initializeWithCurrentSelectedTrainrun() {
    this.selectedTrainrun = this.trainrunService.getSelectedTrainrun();
    this.trainrunLabels = this.labelService.getTextLabelsFromIds(
      this.selectedTrainrun.getLabelIds(),
    );
  }

  private updateTrainrunLabelsAutoCompleteOptions() {
    this.trainrunLabelsAutoCompleteOptions = this.getAutoCompleteLabels();
    this.cd.detectChanges();
  }
}
