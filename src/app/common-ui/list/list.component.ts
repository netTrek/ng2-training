import {
    Component, OnInit, ViewChild, ViewChildren, QueryList, OnChanges, AfterContentInit, AfterViewInit, ElementRef
} from '@angular/core';
import { ListTitleComponent } from './list-title/list-title.component';
import { ListItemComponent } from './list-item/list-item.component';

@Component ( {
    selector   : 'gfk-list',
    templateUrl: './list.component.html',
    styleUrls  : [ './list.component.scss' ]
} )
export class ListComponent implements OnInit, AfterViewInit {

    private _listItems : QueryList<ListItemComponent>;

    @ViewChild ( ListTitleComponent )
    listTitle : ListTitleComponent;


    @ViewChildren ( ListItemComponent )
    set listItems ( value : QueryList<ListItemComponent> ) {
        this._listItems = value;
        console.log ( 'set listItems', value );
    }

    /*
    @ViewChild ( 'testwert' )
    testKnoten : ElementRef;
    */

    val1 : string = 'Hello world!';
    num1 : number = 111;

    size : number = 30;

    imgAlt : string = 'cats';
    imgUrl : string = '../../../assets/images/cat.jpg';

    selectedClass : string = 'selected';

    selectedUsrInd : number = 1;

    constructor () {
    }

    sayHello () : string {
        return '<strong>say</strong> Hello <script>alert("hello");</script>';
    }

    selectUsr ( usrInd : number ) {
        this.selectedUsrInd = usrInd;
    }

    ngOnInit () {
    }

    ngAfterViewInit () : void {
        console.log ( this.listTitle, this._listItems );
        // console.log ( 'testKnoten', this.testKnoten, this.testKnoten.nativeElement );
    }

}
