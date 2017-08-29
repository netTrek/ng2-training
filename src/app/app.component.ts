import { Component } from '@angular/core';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  className = 'supercool';

  isFett       = true;
  isUnderlined = true;

  progress = 30;

  mail    = 'us@netTrek.de';
  imgUrl  = '../assets/images/logo-alpha-klein.png';
  imgInfo = 'schönes bild';
  desc    = `<strong class="supercool">Hello</strong><script>alert("sa");</script>`;

  title = 'msg';

  user: { name: string, age: number } = {
    name: 'saban',
    age : 43
  };
  disableList = false;

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

}
