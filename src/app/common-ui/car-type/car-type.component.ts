import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'audi-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.css']
})
export class CarTypeComponent implements OnInit {

  @Input()
  carType = 'not def';

  constructor() { }

  ngOnInit() {
  }

}
