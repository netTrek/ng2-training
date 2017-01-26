import {
  Component
} from '@angular/core';
import { IListModel } from './common-ui/list/list.component';
import { UpperCasePipe } from '@angular/common';
import { environment } from '../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

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

  buildInfo = environment.buildInfo;

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

  constructor ( router: Router ) {

    const uppercasePipe: UpperCasePipe = new UpperCasePipe ();

    const testing = 'test';
    this.title = uppercasePipe.transform( testing );
    console.log ( testing, this.title );

    router.events
          .filter ( evt => evt instanceof NavigationEnd )
          .subscribe(
                evt => console.log( evt )
          );

  }

  onListIndexChg ( ind: number ) {
    console.log ( 'event', ind );
    this.selectedInd = ind;
  }


}
