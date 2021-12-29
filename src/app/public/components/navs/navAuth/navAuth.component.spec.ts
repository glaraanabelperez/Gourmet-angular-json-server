import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAuthComponent } from './navAuth.component';

describe('NavAuthComponent', () => {
  let component: NavAuthComponent;
  let fixture: ComponentFixture<NavAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
