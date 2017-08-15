import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hb-user-first-name',
  templateUrl: './user-first-name.component.html',
  styleUrls: ['./user-first-name.component.scss']
})
export class UserFirstNameComponent implements OnInit {

  @Input()
  firstname: string;

  @Output()
  firstnameChange: EventEmitter<string> = new EventEmitter();
/*

  @Output()
  nameChg: EventEmitter<string> = new EventEmitter();
*/

  constructor() { }

  chgFirstName () {
    this.firstname = 'heinz';
    // this.nameChg.next( this.firstname );
    this.firstnameChange.next( this.firstname );
  }

  ngOnInit() {
  }

}
