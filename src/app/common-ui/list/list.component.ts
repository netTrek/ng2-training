import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
    ViewChildren,
    QueryList,
    ElementRef,
    Input,
    Output,
    EventEmitter } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';

export interface IListModel {
  num: number;
  name?: string;
}

@Component({
  selector: 'avaya-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @Input( )
  selectedInd: number = 0;

  @Output()
  selectedIndChange: EventEmitter<number> = new EventEmitter<number> ();

  // model: { num: number, name?: string } = {
  model: IListModel = {
    name: 'Saban',
    num: 123
  };

  @ViewChild ('label')
  label: ElementRef;

  @ViewChild (ListItemComponent)
  listItem: ListItemComponent;

  @ViewChildren (ListItemComponent)
  listItems: QueryList<ListItemComponent>;

  constructor() { }


    setInd ( ind: number, evt: MouseEvent ) {
        if ( this.selectedInd !== ind ) {
            this.selectedInd = ind;
            this.selectedIndChange.emit( this.selectedInd );
        }
    }

  getNameAndAge( age?: number ): string {
    age = age || this.model.num;
    // return this.model.name + ' ist ' + age + ' jahre Alt';
    return `${this.model.name} ist ${age} Jahre alt`;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    console.log ( this.listItem, this.listItems, this.label );
    // this.label.nativeElement.innerText = 'rock ....';

  }

}
