import {
  Component, DoCheck, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'pta-user',
  templateUrl: './user.component.html',
  styles: [`
    :host {  
      display: block;
      background-color: #ffe31b;
      cursor: pointer;
    }
    :host.selected {
      text-decoration: underline;  
    }
    
    .spielen {
      color: black;
    }
  `]
})
export class UserComponent implements OnInit  {

  @Input()
  username = 'Peter Müller';

  @Output()
  usernameChange: EventEmitter<string> = new EventEmitter();

  @Input()
  @HostBinding ('class.selected')
  selected = false;

  constructor() { }

  @HostListener ( 'click', ['$event'] )
  chgUsername( mouseEvt?: MouseEvent ) {
    this.usernameChange.emit( this.username );
  }

  ngOnInit() {
    // console.log ( '### user comp init' );
  }

}
