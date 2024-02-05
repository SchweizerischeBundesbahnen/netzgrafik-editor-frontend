import {ComponentFixture, TestBed} from '@angular/core/testing';
import {VariantDialogComponent} from './variant-dialog.component';
import {SBB_DIALOG_DATA, SbbDialogRef} from '@sbb-esta/angular/dialog';

describe('VariantDialogComponent', () => {
  let component: VariantDialogComponent;
  let fixture: ComponentFixture<VariantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantDialogComponent ],
      providers: [
        {provide: SbbDialogRef, useValue: {}},
        {provide: SBB_DIALOG_DATA, useValue: {}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
