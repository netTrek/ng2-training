import {
  Component
} from '@angular/core';
import { IListModel } from './common-ui/list/list.component';

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

  userList: IListModel[] = [
      {
        num: 10,
        name: 'Saban'
      },
      {
        num: 12,
        name: 'Peter'
      },
      {
        num: 22,
        name: 'Frank'
      },
      {
        num: 33,
        name: 'Hans'
      }
  ];

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
