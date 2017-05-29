import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saban works!';
  age = 12;

  constructor () {
    console.log( `root comp with age:= ${this.age} `);
    console.log( `root comp with age:= ${this.age} `);
    console.log( `root comp with age:= ${this.age} `);
  }
}
