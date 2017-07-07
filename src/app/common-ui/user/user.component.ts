import {
  Component, DoCheck, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'pta-user',
  templateUrl: './user.component.html',
  styles: [`
    :host {  
      display: inline-block;
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
export class UserComponent implements OnInit,
OnChanges, DoCheck {

  @Input()
  username = 'Peter Müller';

  @Output()
  usernameChange: EventEmitter<string> = new EventEmitter();

  @HostBinding ('class.selected')
  selected = false;

  @Input()
  @HostBinding ('style.color')
  fontColor = 'blue';

  constructor() { }

  @HostListener ( 'window:resize' , ['$event'] )
  winResize ( evt: Event ) {
    console.log ( evt );
  }

  @HostListener ('mouseover')
  mouseOverComp () {
    this.fontColor = 'red';
  }

  @HostListener ('mouseout')
  mouseOutComp () {
    this.fontColor = 'blue';
  }

  @HostListener ( 'click', ['$event'] )
  chgUsername( mouseEvt?: MouseEvent ) {
    console.log ( mouseEvt );
    this.username = 'test';
    this.usernameChange.emit( this.username );
    this.selected = true;
  }

  ngOnInit() {
    console.log ( '### user comp init' );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
     console.log ( '### user comp changes', changes );
  }


  ngDoCheck (): void {
    console.log ( '### user comp do check' );
  }
}
