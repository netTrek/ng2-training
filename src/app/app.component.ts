import { Component } from '@angular/core';

@Component ( {
  selector   : 'hb-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title     = 'hb';
  fontColor = 'red';
  imgUrl    = '../assets/img/logo-klein.png';

  width = 150;

  html = '<strong>saban</strong> ünlü <script>alert("you are hacked");</script>';

  constructor () {
    /*
    let num = 0;
    const intervalID = setInterval ( () => {
      console.log ('interval');
      if ( ++num === 2 ) {
        clearInterval( intervalID );
      }
    }, 1000 );
    */
  }

  onClick ( title?: string, evt?: MouseEvent ) {

    if ( evt.altKey ) {
      // console.log ( 'alt gedrück' );

      if ( confirm ( 'darf ich weiter machen ' ) ) {
        this.title = title + evt.clientX;
      }
    }
  }

  getTitle (): string {
    // return 'welcome to ' + this.title;
    return `welcome to ${this.title} !`;
  }
}
