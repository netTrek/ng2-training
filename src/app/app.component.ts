import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = `Hello world!`;

  selectedInd : number = 3;



  listTitle: string = 'list title';

  constructor ( $http: Http ) {
    console.log( '$http', $http );
  }

  chgInd ( newInd : number ) {
    console.log ( 'index changed' , newInd );
    this.selectedInd = newInd;
  }


  onClick () {
    console.log ("Say :=" , this.title );
  }

}
