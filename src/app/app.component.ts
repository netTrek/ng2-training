import { Component } from '@angular/core';
import {ReversePipe} from "./common-ui/reverse.pipe";

@Component({
  selector: 'baywa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';
  now: number = Date.now();
  selectedInd: number = 0;

  constructor (  ) {
    const reversePipe : ReversePipe = new ReversePipe ();
    console.info ( reversePipe.transform( 123 ) );
    console.info ( reversePipe.transform( 'sa' ) );
    console.info ( reversePipe.transform( [1, 3, 2] ) );
  }


  /*
  chg ( ind: number ) {
    console.info ( ind );
  }
  */

}
