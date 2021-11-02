import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterFromComponent } from './filter-from.component';

describe('FilterFromComponent', () => {
  let component: FilterFromComponent;
  let fixture: ComponentFixture<FilterFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterFromComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
