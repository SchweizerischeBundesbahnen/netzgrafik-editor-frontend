import {ComponentFixture, TestBed} from "@angular/core/testing";

import {VersionEntriesComponent} from "./version-entries.component";

describe("CompleteVersionEntriesComponent", () => {
  let component: VersionEntriesComponent;
  let fixture: ComponentFixture<VersionEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionEntriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionEntriesComponent);
    component = fixture.componentInstance;

    component.model = {
      snapshotVersions: [],
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
