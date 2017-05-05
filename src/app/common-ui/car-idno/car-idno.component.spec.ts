import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarIDNoComponent } from './car-idno.component';

describe('CarIDNoComponent', () => {
  let component: CarIDNoComponent;
  let fixture: ComponentFixture<CarIDNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarIDNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarIDNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
