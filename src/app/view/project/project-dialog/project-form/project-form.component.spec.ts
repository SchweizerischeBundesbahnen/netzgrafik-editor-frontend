import {ComponentFixture, TestBed} from "@angular/core/testing";

import {
  ProjectFormComponent,
  ProjectFormComponentModel,
} from "./project-form.component";
import {FormModel} from "../../../../utils/form-model";

describe("ProjectFormComponent", () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormComponent);
    component = fixture.componentInstance;
    component.model = new FormModel<ProjectFormComponentModel>({
      name: "",
      summary: "",
      description: "",
      writeUsers: [],
      readUsers: [],
    });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
