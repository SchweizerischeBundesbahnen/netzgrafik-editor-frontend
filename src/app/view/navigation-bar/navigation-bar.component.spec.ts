import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationBarComponent} from './navigation-bar.component';
import {
  ProjectControllerBackendService,
  VariantControllerBackendService,
} from '../../api/generated';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {NavigationService} from '../../services/ui/navigation.service';
import {NEVER} from 'rxjs';
import {map} from 'rxjs/operators';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  let projectControllerBackendService: Partial<ProjectControllerBackendService>;
  let variantControllerBackendService: Partial<VariantControllerBackendService>;
  let router: Partial<Router>;

  beforeEach(async () => {
    router = {
      events: NEVER.pipe(map(() => new NavigationEnd(0, '', ''))),
    };

    await TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      providers: [
        {provide: Router, useValue: router},
        {provide: NavigationService, useValue: {}},
        {
          provide: ProjectControllerBackendService,
          useValue: projectControllerBackendService,
        },
        {
          provide: VariantControllerBackendService,
          useValue: variantControllerBackendService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
