import {
  Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ContentChild,
  AfterContentInit, ContentChildren, QueryList
} from '@angular/core';
import { ListTitleComponent } from './list-title/list-title.component';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'gfk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {

  @ContentChild (ListTitleComponent)
  listTitle: ListTitleComponent;

  @ContentChildren (ListItemComponent)
  listItems: QueryList<ListItemComponent>;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit () : void {
    console.log ( this.listTitle, this.listItems );
  }

}
