import {
    Component, OnInit, AfterViewInit, Input, Output, EventEmitter
} from '@angular/core';

@Component ( {
    selector   : 'gfk-list',
    templateUrl: './list.component.html',
    styleUrls  : [ './list.component.scss' ]
} )
export class ListComponent implements OnInit {

    @Input ()
    valueList : any[];

    @Input ()
    columns : string [];

    @Input ()
    parse : Function;

    @Input ()
    selectedUsrInd : number = -1;

    @Output ()
    selectedUsrIndChange : EventEmitter<number> = new EventEmitter<number> ();

    @Output ()
    selectedItem : EventEmitter<any> = new EventEmitter<any>();

    @Input ()
    titel : string = 'My List';

    constructor () {
    }

    selectUsr ( usrInd : number ) {
        if ( this.selectedUsrInd !== usrInd ) {
            this.selectedUsrInd = usrInd;
            this.selectedUsrIndChange.emit ( usrInd );
            this.selectedItem.emit ( this.valueList [usrInd] );
        }
    }

    getEvenOddClasses ( isEven : boolean ) : string {
        if ( isEven ) {
            return 'even';
        }
        return 'odd';
    }

    ngOnInit () {
    }

}
