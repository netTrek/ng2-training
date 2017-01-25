import {
  Component
} from '@angular/core';

@Component({
  selector: 'avaya-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  borderClass: string = 'width-border';

  imgWidth: number = 100;
  imgUrl: string = '../assets/images/logo.png';

  html: string = '<strong>Cool oder?</strong>';


  title = 'app works!';
  selectedInd: number = 3;


  constructor () {
    const testing = 'test';
    this.title = testing;
      console.log ( testing, this.title );
  }
  /*
  onListIndexChg ( ind: number ) {
    console.log ( 'event', ind );
    this.selectedInd = ind;
  }
  */
}
