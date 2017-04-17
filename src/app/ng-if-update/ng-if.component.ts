import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  isWoman = true;

  constructor() { }

  ngOnInit() {
  }

}
