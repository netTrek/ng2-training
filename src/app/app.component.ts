import { Component } from '@angular/core';

export interface IUser {
  fistname: string;
  lastname: string;
  age: number;
}

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )
export class AppComponent {

  title = 'app works!';

  list: string[] = [ 'peter', 'hans', 'saban', 'heike' ];

  className = 'cssclasse';

  userVOs: IUser[] = [
    {
      fistname: 'saban',
      lastname: 'ünlü',
      age     : 43
    },
    {
      fistname: 'hans',
      lastname: 'walter',
      age     : 12
    }
  ];

  /*
   rest: number;
   showCountdown = true;
   totalTime = 22;

   username = 'saban';

   divWidth = 200;

   fontColor = 'red';

   imgUrl = '../assets/images/logo-gross.png';

   htmlBindung = `<strong>saban</strong>
   <script>alert('hacked')</script>`;

   getTitle (): string {
   return 'String als Rückgabe ' + this.title;
   }

   updateTitle ( mouseEvt: MouseEvent ) {
   console.log ( mouseEvt );
   this.title = 'saban ünlü ' + mouseEvt.clientX;
   }

   updateRestTime ( time: number ) {
   console.log ( 'restTime triggered', time );
   this.rest = time;
   }

   updateTotalTime () {
   this.totalTime = 33;
   }

   usrNameUpdated ( newUsername : string ) {
   console.log ( 'new user name is := ' , newUsername );
   this.username = newUsername;
   }
   */

}
