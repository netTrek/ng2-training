import {
    AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { CarIDNoComponent } from './common-ui/car-idno/car-idno.component';
import { CarTypeComponent } from './common-ui/car-type/car-type.component';

@Component({
  selector: 'audi-car',
  template: `
    <h1>car Works! {{car}}</h1>
    <audi-car-idno vin="4711"></audi-car-idno>
    <audi-car-idno vin="12345"></audi-car-idno>
    <audi-car-type carType="A4"></audi-car-type>
    <!--
    <ng-content select="audi-car-idno"></ng-content>
    <ng-content></ng-content>
    -->
      
  `,
  styles: [
      `
        :host {
            color: red;
        }
          p {
              color: black;
              font-size: smaller;
          }
        `
  ]
})
export class CarComponent implements OnInit, AfterViewInit /*AfterContentInit*/ {

    car = 'audi';

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

  constructor() {
  }
    ngAfterViewInit (): void {
      console.log ('after', this.carId, this.carId.vin);
      console.log ('after', this.carType, this.carType.carType);
      console.log ('after', this.carIdList );
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
