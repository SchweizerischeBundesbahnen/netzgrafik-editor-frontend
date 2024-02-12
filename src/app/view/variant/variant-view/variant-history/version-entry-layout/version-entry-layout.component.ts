import {Component, Input} from '@angular/core';

@Component({
  selector: 'sbb-version-entry-layout',
  templateUrl: './version-entry-layout.component.html',
  styleUrls: ['./version-entry-layout.component.scss'],
})
export class VersionEntryLayoutComponent {
  @Input() state?: 'conflict' | 'added';
  @Input() message?: string;

  @Input() titleField: string | UserId;
  @Input() dateField: Date;
  @Input() commentField?: string;

  isInConflictState(): boolean {
    return this.state === 'conflict';
  }

  isInAddedState(): boolean {
    return this.state === 'added';
  }

  public getEntryStyle(): Record<string, boolean> {
    return {
      'in-conflict': this.isInConflictState(),
      'new-added': this.isInAddedState(),
    };
  }

  getUserId(): string | undefined {
    if (this.titleField instanceof UserId) {
      return this.titleField.value;
    }
    return undefined;
  }

  getTitle(): string | undefined {
    if (typeof this.titleField === 'string') {
      return this.titleField;
    }
    return undefined;
  }
}

export class UserId {
  constructor(readonly value: string) {}
}
