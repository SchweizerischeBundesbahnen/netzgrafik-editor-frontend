import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CardGridComponent} from './card-grid.component';

describe('CardGridComponent', () => {
  let component: CardGridComponent;
  let fixture: ComponentFixture<CardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
