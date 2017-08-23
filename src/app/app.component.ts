import { Component, Inject, Optional } from '@angular/core';

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )
export class AppComponent {
  title = 'app';

  constructor ( @Optional() @Inject ( 'model' ) model: any, @Optional() @Inject ( 'toaster' ) toaster: any ) {
    console.log ( 'ng1 toaster injected', toaster );
    console.log ( 'ng1 model injected', model );
  }
}
