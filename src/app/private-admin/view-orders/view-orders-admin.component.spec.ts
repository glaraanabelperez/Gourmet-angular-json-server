import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOrdersAdminComponent } from './view-orders-admin.component';

describe('ViewOrdersAdminComponent', () => {
  let component: ViewOrdersAdminComponent;
  let fixture: ComponentFixture<ViewOrdersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
