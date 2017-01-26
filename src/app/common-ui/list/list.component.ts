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


    private _dataProvider: any[] = [];

    @Input ()
    columns: string[] = [];

    @Input()
    set dataProvider ( value: any[] ) {
        this._dataProvider = value;
        this.selectedItem = this.dataProvider[this.selectedInd];
    }
    get dataProvider (): any[] {
        return this._dataProvider;
    }

    @Input( )
    selectedInd: number = 0;

    @Output()
    selectedIndChange: EventEmitter<number> = new EventEmitter<number> ();

    selectedItem: any;

  constructor() { }

    setInd ( ind: number, evt?: MouseEvent ) {
        if ( this.selectedInd !== ind ) {
            this.selectedInd = ind;
            this.selectedIndChange.emit( this.selectedInd );
        }
    }

    del ( item: any, evt?: MouseEvent ) {
        if ( !! evt ) {
            evt.stopPropagation();
            this.dataProvider.splice( this.dataProvider.indexOf(item), 1);
        }
    }

    setSelectedItem ( item: any ) {

      if ( this.selectedItem !== item ) {
        this.setInd( this.dataProvider.indexOf(item) );
        this.selectedItem = item;
      }
    }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }
}
