import {Component, OnInit, ViewEncapsulation, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'baywa-user',
  template: `
  <h3>User: <ng-content select="baywa-user-title"></ng-content> <ng-content></ng-content></h3>
`,
  styles: [`
          :host {
                color: red;
            }
    `],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  @HostBinding ('class.green') over: boolean = false;
  @HostListener ('mouseover', ['$event'])
  onOver ( evt: Event ) {
    console.info ( evt );
    this.over = true;
  }
  @HostListener ('mouseout')
  onOut () {
    this.over = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
