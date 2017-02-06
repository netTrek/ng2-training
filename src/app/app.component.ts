import { Component  } from '@angular/core';

@Component({
  selector: 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  list : any[] = ['sa','aa','sa','we'];

  title = 'app works!';


  chg() {
    //this.list = ['sas','saa','ssa','swe'];
    this.list.push( 'test', 'te' );
  }


}
