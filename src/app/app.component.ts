import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  divWidth = 200;

  fontColor = 'red';

  imgUrl = '../assets/images/logo-gross.png';

  htmlBindung = `<strong>saban</strong>
  <script>alert('hacked')</script>

`;

  getTitle (): string {
    return 'String als Rückgabe' + this.title;
  }

}
