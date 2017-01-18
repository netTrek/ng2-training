import { Component } from '@angular/core';

@Component({
  selector: 'baywa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';
  now : number = Date.now();
  selectedInd: number = 0;

  /*
  chg ( ind: number ) {
    console.info ( ind );
  }
  */

}
