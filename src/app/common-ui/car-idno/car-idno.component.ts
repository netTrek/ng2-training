import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'audi-car-idno',
  templateUrl: './car-idno.component.html',
  styleUrls: ['./car-idno.component.css']
})
export class CarIDNoComponent implements OnInit {

  @Input()
  vin = 'not def';

  constructor() { }

  ngOnInit() {
  }

}
