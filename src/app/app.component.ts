import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
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
/*
  usrNameUpdated ( newUsername : string ) {
    console.log ( 'new user name is := ' , newUsername );
    this.username = newUsername;
  }
  */

}
