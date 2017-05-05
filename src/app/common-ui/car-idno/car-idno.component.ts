import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'audi-car-idno',
  templateUrl: './car-idno.component.html',
  styleUrls: ['./car-idno.component.css']
})
export class CarIDNoComponent implements OnInit {

  @Input()
  vin = 'not def';

  /*
   <audi-car-idno [class.hide]="hide"
   */
  @HostBinding ('class.hide')
  hide = false;


  constructor() { }

  ngOnInit() {
  }
/*
  <audi-car-idno (click)="clickHandler($event")
*/
  @HostListener ('click', ['$event'] )
  clickHandler ( evt?: Event ) {
    console.log ('clicked', evt);
    this.hide = true;
  }

}
