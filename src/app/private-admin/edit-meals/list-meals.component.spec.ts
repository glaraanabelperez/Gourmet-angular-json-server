import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMealsComponent } from './list-meals.component';

describe('ListMealsComponent', () => {
  let component: ListMealsComponent;
  let fixture: ComponentFixture<ListMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
