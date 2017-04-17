import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'gfk-grid',
  template: `
      <ng-template ngFor
                [ngForOf]="dataProvider"
                [ngForTemplate]="itemTemplate"></ng-template>
  `,
  styles: []
})
export class GridComponent implements OnInit {

  @Input()
  dataProvider: any[];

  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
