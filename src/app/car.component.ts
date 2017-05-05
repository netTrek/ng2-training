import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { CarIDNoComponent } from './common-ui/car-idno/car-idno.component';

@Component({
  selector: 'audi-car',
  template: `
    <h1>car Works! {{car}}</h1>
    <ng-content select="audi-car-idno"></ng-content>
    <ng-content></ng-content>
      
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
export class CarComponent implements OnInit, AfterContentInit {

    car = 'audi';

  @ContentChild (CarIDNoComponent)
  carId: CarIDNoComponent;

  @ContentChildren (CarIDNoComponent)
  carIdList: QueryList<CarIDNoComponent>;


  constructor() {
  }

    ngAfterContentInit (): void {
      console.log ('after', this.carId, this.carId.vin);
      console.log ('list', this.carIdList);
    }

  ngOnInit() {
  }

}
