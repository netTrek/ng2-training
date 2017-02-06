import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'gfk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  dataprovider: any[];

  // @ContentChild ( 'itemTmp' )

  @ContentChild(TemplateRef)
  itemTmp: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
