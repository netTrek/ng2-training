import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompComponent } from './my-comp.component';
import { IUserService, UserService } from '../service/user.service';
import { Http } from '@angular/http';

describe('MyCompComponent', () => {
  let component: MyCompComponent;
  let fixture: ComponentFixture<MyCompComponent>;

  const mockData: IUserService = {
    name: 'hans in my comp'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompComponent ]
    })
   .overrideComponent ( MyCompComponent, {
     set: {
       providers: [
         { provide: UserService, useValue: mockData },
         { provide: Http, useValue: { name: 'mock service' } }
       ]
     }
   } )
   .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as user.name '${mockData.name}'`, async(() => {
    fixture = TestBed.createComponent(MyCompComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.userService.name).toEqual( mockData.name );
  }));

  it(`should render user.name '${mockData.name}' in a h2 tag`, async(() => {
    fixture = TestBed.createComponent(MyCompComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain( mockData.name );
  }));

});
