import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFirstNameComponent } from './user-first-name.component';

describe('UserFirstNameComponent', () => {
  let component: UserFirstNameComponent;
  let fixture: ComponentFixture<UserFirstNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFirstNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
