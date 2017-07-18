import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component ( {
  selector   : 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.css' ]
} )
export class UserNameComponent implements OnInit {


  @Input ()
  username = 'peter müller';

  @Output ()
  usernameChange: EventEmitter<string> = new EventEmitter ();

  @HostBinding ('style.color')
  fontcolor = 'black';


  constructor () {
  }

  ngOnInit () {
  }

  @HostListener ( 'click', ['$event'] )
  chgUsrName (mouseEvt: MouseEvent) {
    this.username = 'frank';
    this.usernameChange.emit ( this.username );
    // console.log ( mouseEvt );
    this.fontcolor = 'red';

  }


  /*
  @HostListener ('document:mousemove', ['$event.clientX'] )
  mouseMove ( xpos: number ) {
    console.log ( xpos );
  }

  @HostListener ('window:resize', ['$event'] )
  resize ( evt: Event) {
    console.log ( evt );
  }
  */




}
