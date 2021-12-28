import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMenusComponent} from './editMenus.component';

describe('EditMenusComponent', () => {
  let component: EditMenusComponent;
  let fixture: ComponentFixture<EditMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
