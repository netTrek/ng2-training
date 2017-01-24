import {
  Component
} from '@angular/core';

@Component({
  selector: 'avaya-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  title = 'app works!';

  constructor () {
    const testing = 'test';
    this.title = testing;
      console.log ( testing, this.title );
  }

}
