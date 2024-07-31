import {ComponentFixture, TestBed} from "@angular/core/testing";

import {PreviewButtonComponent} from "./preview-button.component";
import {I18nModule} from "../../../../../core/i18n/i18n.module";

describe("PreviewButtonComponent", () => {
  let component: PreviewButtonComponent;
  let fixture: ComponentFixture<PreviewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewButtonComponent],
      imports:[I18nModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
