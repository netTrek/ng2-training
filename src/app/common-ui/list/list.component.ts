import { Component,
          OnInit,
          ContentChild,
          AfterContentInit,
          ContentChildren,
          QueryList } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
@Component({
  selector: 'avaya-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {

  private _listItems: QueryList<ListItemComponent>;

  @ContentChild(ListItemComponent)
  listItem: ListItemComponent;

  @ContentChildren (ListItemComponent)
  set listItems ( v: QueryList<ListItemComponent> ) {
    console.warn ( v );
    this._listItems = v;
  }

  get listItems (): QueryList<ListItemComponent> {
    return this._listItems;
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log ( this.listItem, this.listItems );
  }
}
