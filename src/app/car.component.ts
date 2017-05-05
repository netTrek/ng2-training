import {
    AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { CarIDNoComponent } from './common-ui/car-idno/car-idno.component';
import { CarTypeComponent } from './common-ui/car-type/car-type.component';

@Component({
  selector: 'audi-car',
  template: `
      <h1 #carHeader [attr.title]="car" [style.color]="ciColor">car Works! {{car}}</h1>
      <img [src]="'./assets/images/' + logo" alt="mein wappen">
      <audi-car-idno vin="4711"></audi-car-idno>
      <audi-car-idno vin="12345"></audi-car-idno>
      <audi-car-type carType="A4"></audi-car-type>
      <!--
      <ng-content select="audi-car-idno"></ng-content>
      <ng-content></ng-content>
      -->
        <!--<div [style.width]="progress+'%'"></div>-->
        <div [style.width.%]="progress" [class.hide]="progress==100" [attr.title]="progress"></div>
  `,
  styles: [
      `
          div {
              background-color: black;
              display: inline-block;
              width: 10px;
              height: 10px;
          }
          
          div.hide {
              display: none;
          }
          
        `
  ]
})
export class CarComponent implements OnInit, AfterViewInit /*AfterContentInit*/ {

    @Input()
    car = 'audi';

    @Input()
    ciColor = 'silver';

    @Input()
    logo = 'wappen.png';

    @Input()
    progress = 50;

    /*
  @ContentChild (CarIDNoComponent)
  carId: CarIDNoComponent;

  @ContentChildren (CarIDNoComponent)
  carIdList: QueryList<CarIDNoComponent>;
    */

  @ViewChild( CarIDNoComponent )
  carId: CarIDNoComponent;

  @ViewChildren ( CarIDNoComponent )
  carIdList: QueryList<CarIDNoComponent>;

  @ViewChild( CarTypeComponent )
  carType: CarTypeComponent;

  @ViewChild ('carHeader')
  carHeader: ElementRef;

  constructor() {
  }
    ngAfterViewInit (): void {
      console.log ('after', this.carId, this.carId.vin);
      console.log ('after', this.carType, this.carType.carType);
      console.log ('after', this.carIdList );
      console.log ('after', this.carHeader, this.carHeader.nativeElement );
    }

/*
    ngAfterContentInit (): void {
      console.log ('after', this.carId, this.carId.vin);
      console.log ('list', this.carIdList);
    }
*/
  ngOnInit() {
  }

}
