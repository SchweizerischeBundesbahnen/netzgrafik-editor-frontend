import {Component, EventEmitter, Input, Output} from "@angular/core";
import {HistoryEntryAction} from "../history-entry/history-entry.component";
import {UntypedFormControl} from "@angular/forms";

@Component({
  selector: "sbb-publish-entry",
  templateUrl: "./publish-entry.component.html",
  styleUrls: ["./publish-entry.component.scss"],
})
export class PublishEntryComponent {
  @Input() model: PublishEntryModel;
  @Input() publishDisabled = false;

  @Output() publishClicked = new EventEmitter<string>();
  @Output() dropChangedClicked = new EventEmitter<void>();

  comment = new UntypedFormControl("");

  readonly tComment = $localize`:@@app.view.variant.variant-view.variant-history.publish-entry.comment:Comment`;
  readonly tPublish = $localize`:@@app.view.variant.variant-view.variant-history.publish-entry.publish:Publish`;
  readonly tPublishDisabledTitle = this.publishDisabled ? $localize`:@@app.view.variant.variant-view.variant-history.publish-entry.local-changes:Local changes must be saved first` : "";

  get actions(): HistoryEntryAction[] {
    return [
      {
        name: $localize`:@@app.view.variant.variant-view.variant-history.publish-entry.discard-changes:Discard changes`,
        icon: "trash-small",
        onClick: () => this.dropChangedClicked.next(),
      },
    ];
  }

  onPublishClicked() {
    this.publishClicked.next(this.comment.value);
  }
}

export interface PublishEntryModel {
  readonly nextReleaseVersion: number;
}
