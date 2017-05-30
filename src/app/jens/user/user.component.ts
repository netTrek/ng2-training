import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  get userName (): string {
    return this._userName;
  }
  set userName ( value: string ) {
    this._userName = value;
  }
  private _userName: string;

  constructor() { }

  ngOnInit() {
  }

}
