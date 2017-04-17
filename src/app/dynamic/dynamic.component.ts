import { Component, OnInit } from '@angular/core';
import { CompAComponent } from './comp-a.component';
import { CompBComponent } from './comp-b.component';

@Component({
  selector: 'gfk-dynamic',
  template: `
    <p>
      dynamic Works!
    </p>
    <ng-container *ngComponentOutlet="Comp"></ng-container>
    <button (click)="switchComp()">switch</button>
  `,
  styles: []
})
export class DynamicComponent implements OnInit {

  Comp: any;

  constructor() {
    this.Comp = CompAComponent;
  }

  switchComp() {
    if ( this.Comp === CompAComponent ) {
      this.Comp = CompBComponent;
    } else {
      this.Comp = CompAComponent;
    }
  }

  ngOnInit() {
  }

}
