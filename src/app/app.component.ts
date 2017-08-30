import { Component, HostListener } from '@angular/core';
import { UserDto } from './user/user-dto';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  users: UserDto [] = [];

  date: number = Date.now();

  className = 'supercool';

  isFett       = true;
  isUnderlined = true;

  progress = 30;

  mail   = 'us@netTrek.de';
  imgUrl = '../assets/images/netTrekLogo.png';

  showImg = true;

  imgInfo = 'schönes bild';
  desc    = `<strong class="supercool">Hello</strong><script>alert("sa");</script>`;

  title = 'msg';

  user: { name: string, age: number } = {
    name: 'saban',
    age : 43
  };
  disableList                         = false;

  constructor () {

    


    for ( let i = 0; i < 10; i ++ ) {
      this.users.push ( <UserDto> {
        firstname: `saban ${i}`,
        lastname : `uenlue ${i}`,
        age      : 22 + i,
        city     : `dorste ${i}`,
        zip: `46282 - ${i}`
      } );
    }
    console.log ( this.users );
  }

  validate ( companyName?: string ): string {
    if ( (companyName || this.title) === 'msg' ) {
      return 'isMsg';
    }
    return 'isNotMsg';
  }

  keyDown ( event: KeyboardEvent ) {
    console.log ( 'keydown', event );
  }

  toggleFett () {
    this.isFett = ! this.isFett;
  }

  toggleUnderlined () {
    this.isUnderlined = ! this.isUnderlined;
  }

  @HostListener ( 'window:resize', [ '$event',
                                     'user',
                                     '123'
  ] )
  resize ( evt?: Event, name?: string, num?: string ) {
    console.log ( 'resize', evt, name, num );
  }

}
