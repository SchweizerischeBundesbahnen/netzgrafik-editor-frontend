import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HistoryEntryAction } from '../history-entry/history-entry.component';
import { DownloadVersionModel, VersionId } from '../model';

@Component({
  selector: 'sbb-snapshot-entry',
  templateUrl: './snapshot-entry.component.html',
  styleUrls: ['./snapshot-entry.component.scss'],
})
export class SnapshotEntryComponent {
  @Input() model: SnapshotEntryModel;
  @Input() isWritable = false;

  @Output() restore = new EventEmitter<VersionId>();
  @Output() display = new EventEmitter<VersionId | null>();
  @Output() saveAsNewVariant = new EventEmitter<VersionId>();
  @Output() download = new EventEmitter<DownloadVersionModel>();

  get actions(): HistoryEntryAction[] {
    const download = {
      name: 'Download',
      icon: 'download-small',
      onClick: () =>
        this.download.emit({
          versionId: this.model.id,
          fileName: `netzgrafik_aenderung_${this.model.snapshotVersion}.json`,
        }),
    };

    if (!this.isWritable) {
      return [download];
    }

    return [
      {
        name: 'Wiederherstellen',
        icon: 'arrows-circle-small',
        onClick: () => this.restore.next(this.model.id),
      },
      {
        name: 'Als neue Variante',
        icon: 'circle-plus-small',
        onClick: () => this.saveAsNewVariant.emit(this.model.id),
      },
      download,
    ];
  }

  getState(): 'conflict' | 'added' | undefined {
    if (this.model.lastAdded) {
      return 'added';
    }

    return undefined;
  }

  getMessage(): string | undefined {
    if (this.model.lastAdded) {
      return 'Erfolgreich gespeichert';
    }

    return undefined;
  }

  getTitle(): string {
    return `Änderung ${this.model.snapshotVersion}`;
  }
}

export interface SnapshotEntryModel {
  id: VersionId;
  releaseVersion: number;
  snapshotVersion: number;
  createdAt: Date;
  createdBy: string;
  comment?: string;
  lastAdded?: boolean;
}
