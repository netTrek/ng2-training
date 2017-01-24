import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'avaya-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  name: string = 'netTrek.de';

  constructor() {  }

  ngOnInit() {
  }

}
