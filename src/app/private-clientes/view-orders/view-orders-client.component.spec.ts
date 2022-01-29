import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOrdersClientComponent} from './view-orders-client.component';

describe('ViewOrdersClientComponent', () => {
  let component: ViewOrdersClientComponent;
  let fixture: ComponentFixture<ViewOrdersClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
