import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewButtonComponent} from './preview-button.component';

describe('PreviewButtonComponent', () => {
  let component: PreviewButtonComponent;
  let fixture: ComponentFixture<PreviewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
