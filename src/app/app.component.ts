import { Component } from '@angular/core';

@Component ( {
  selector   : 'pta-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )
export class AppComponent {

  usersList: string[] = [ 'heike', 'peter', 'saban', 'hans', 'paula' ];

  listClassInfo = 'liste';

  wahr = true;

  title = 'app works!';
}
