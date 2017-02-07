import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = `Hello world!`;

  listTitle: string = 'list title';

  constructor ( $http: Http ) {
    console.log( '$http', $http );
  }


  onClick () {
    console.log ("Say :=" , this.title );
  }

}
