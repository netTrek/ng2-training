import { Component } from '@angular/core';

@Component({
  selector: 'baywa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';

  selectedInd: number = 1;

  /*
  chg ( ind: number ) {
    console.info ( ind );
  }
  */

}
