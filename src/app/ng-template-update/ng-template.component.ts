import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'gfk-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {



  private userSub: BehaviorSubject<{ name: string, age: number }[]> = new BehaviorSubject ( [
    { name: 'saban', age: 41 },
    { name: 'peter', age: 42 },
    { name: 'franz', age: 43 },
    { name: 'hansi', age: 44 }
  ] );

  private carsSub: BehaviorSubject<{ vin: string, type: string }[]> = new BehaviorSubject ( [
    { vin: '5172653', type: 'A3' },
    { vin: '123', type: '42' },
    { vin: '123', type: '43' },
    { vin: '123', type: '44' }
  ] );


  public userObservable: Observable<{ name: string, age: number }[]> = this.userSub.asObservable();

  public carsObservable: Observable<{ vin: string, type: string }[]> = this.carsSub.asObservable();

  constructor() { }

  update() {
    this.userSub.next( [
      { name: 'frank',  age: Math.floor((Math.random() * 10) + 11 ) },
      { name: 'hans', age: Math.floor((Math.random() * 10) + 21 ) },
      { name: 'paul',   age: Math.floor((Math.random() * 10) + 31) }
    ]);
  }

  ngOnInit() {
  }

}
