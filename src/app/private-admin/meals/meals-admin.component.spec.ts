import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealsAdminComponent } from './meals-admin.component';

describe('MealsComponent', () => {
  let component: MealsAdminComponent;
  let fixture: ComponentFixture<MealsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
