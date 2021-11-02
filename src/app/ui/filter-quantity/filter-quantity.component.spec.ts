import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterQuantityComponent } from './filter-quantity.component';

describe('FilterQuantityComponent', () => {
  let component: FilterQuantityComponent;
  let fixture: ComponentFixture<FilterQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterQuantityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
