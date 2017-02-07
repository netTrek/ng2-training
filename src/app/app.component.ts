import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor ( $http: Http ) {
    console.log( '$http', $http );
  }

  title = `Hello world!`;

  onClick () {
    console.log ("Say :=" , this.title );
  }

}
