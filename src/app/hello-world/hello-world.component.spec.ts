import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';
import { IUserService, UserService } from '../service/user.service';

describe ( 'HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;


  const mockData: IUserService = {
    name: 'hans in hello-world comp'
  };

  beforeEach ( async ( () => {
    TestBed.configureTestingModule ( {
      declarations: [ HelloWorldComponent ]
    } )
   .overrideComponent ( HelloWorldComponent, {
     set: {
       providers: [
         { provide: UserService, useValue: mockData }
       ]
     }
   } )
   .compileComponents ();
  } ) );

  beforeEach ( () => {
    fixture   = TestBed.createComponent ( HelloWorldComponent );
    component = fixture.componentInstance;
    fixture.detectChanges ();
  } );

  it ( 'should be created', () => {
    expect ( component )
      .toBeTruthy ();
  } );

  it('should render name in a h2 tag', async(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain( mockData.name );
  }));
} );
