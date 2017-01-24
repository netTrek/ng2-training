import {
  Component,
  OnInit,
  ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef
} from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
@Component({
  selector: 'avaya-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild ('label')
  label: ElementRef;

  @ViewChild (ListItemComponent)
  listItem: ListItemComponent;

  @ViewChildren (ListItemComponent)
  listItems: QueryList<ListItemComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    console.log ( this.listItem, this.listItems, this.label );
    this.label.nativeElement.innerText = 'rock ....';

  }
}
