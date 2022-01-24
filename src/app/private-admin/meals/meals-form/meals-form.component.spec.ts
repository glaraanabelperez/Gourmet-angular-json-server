import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealsForm } from './meals-form.component';

describe('MealsForm', () => {
  let component: MealsForm;
  let fixture: ComponentFixture<MealsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
