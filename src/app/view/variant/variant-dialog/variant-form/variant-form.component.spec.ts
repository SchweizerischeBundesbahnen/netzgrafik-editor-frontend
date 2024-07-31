import {ComponentFixture, TestBed} from "@angular/core/testing";
import {
  VariantFormComponent,
  VariantFormComponentModel,
} from "./variant-form.component";
import {FormModel} from "../../../../utils/form-model";
import {I18nModule} from "../../../../core/i18n/i18n.module";

describe("VariantFormComponent", () => {
  let component: VariantFormComponent;
  let fixture: ComponentFixture<VariantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[I18nModule],
      declarations: [VariantFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantFormComponent);
    component = fixture.componentInstance;
    component.model = new FormModel<VariantFormComponentModel>({name: ""});
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
