import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../services/iuser';

@Component ( {
  selector   : 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.css' ]
} )
export class UserNameComponent implements OnInit {

/*


  @Output ()
  usernameChange: EventEmitter<string> = new EventEmitter ();

  @HostBinding ('style.color')
  fontcolor = 'black';
  */

  @Input ()
  usr: IUser;

  @Output ()
  selectedUsr: EventEmitter<IUser> = new EventEmitter ();


  constructor () {
  }

  ngOnInit () {
  }

  @HostListener ( 'click' )
  private select () {
    this.selectedUsr.emit( this.usr );
  }

  /*
  @HostListener ( 'click', ['$event'] )
  chgUsrName (mouseEvt: MouseEvent) {
    this.username = 'frank';
    this.usernameChange.emit ( this.username );
    // console.log ( mouseEvt );
    this.fontcolor = 'red';

  }


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
