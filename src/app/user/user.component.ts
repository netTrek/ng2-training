import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { UserNameComponent } from './user-name/user-name.component';
import { UserDto } from '../model/user-dto';
import { DeviceService } from '../common-ui/service/device.service';

@Component ( {
  selector   : 'hb-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit/*, AfterContentInit*/, AfterViewInit, OnChanges {

  /*

    @ContentChild ( UserNameComponent )
    userName: UserNameComponent;

    @ContentChildren ( UserNameComponent )
    userNames: QueryList<UserNameComponent>;
  */

  /*
    !!!!!! SO NIE !!!!!!
    constructor( elem: ElementRef ) {
      console.log ( elem );
      elem.nativeElement.getElementsByTagName( 'hb-user-name' );
    }
  */

  @Input ()
  user: UserDto;

  @Output ()
  selectUsr: EventEmitter<UserDto> = new EventEmitter ();

  @Output ()
  deleteUsr: EventEmitter<UserDto> = new EventEmitter ();

  @ViewChild ( UserNameComponent )
  userName: UserNameComponent;

  /*
    @ViewChild ( 'usrheader' )
    userHeader: ElementRef;
  */

  width: number;

  constructor ( public $device: DeviceService ) {
    // console.log ( $device );
    $device.resize$.subscribe(
      evt => this.width = (<Window>evt.target).innerWidth
    );
  }

  @HostListener ( 'click', [ '$event' ] ) // <hb-user (click)="methode($event)"
  setAsSelected ( evt?: MouseEvent ) {
    console.log ( evt );
    // console.log ( 'set this user', this.user, 'as selected' );
    this.selectUsr.next ( this.user );
    this.$device.uuid = this.user.firstname;
  }

  @HostListener ( 'dblclick', [ '$event' ] )
  delUst ( evt?: MouseEvent ) {
    this.deleteUsr.next ( this.user );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    // console.log ( changes );
  }

  ngOnInit () {
  }

  /*
    ngAfterContentInit (): void {
      console.log( 'alle content inhalte init', this.userName, this.userNames );
    }
    */

  ngAfterViewInit (): void {
    /*
      console.log( 'alle template-inhalte init', this.userName/!*, this.userNames*!/ );
      console.log ( this.userHeader );
      this.userHeader.nativeElement.style.color = 'red';
    */
  }
}
