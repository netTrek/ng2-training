import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component ( {
    selector   : 'gfk-ng-for',
    templateUrl: './ng-for.component.html',
    styleUrls  : [ './ng-for.component.scss' ]
} )
export class NgForComponent implements OnInit {

    private userSub: BehaviorSubject<{ name: string, age: number }[]> = new BehaviorSubject ( [
        { name: 'saban', age: 41 },
        { name: 'peter', age: 42 },
        { name: 'franz', age: 43 },
        { name: 'hansi', age: 44 }
    ] );


    public userObservable: Observable<{ name: string, age: number }[]> = this.userSub.asObservable();


    constructor () {
    }

    ngOnInit () {
    }

}
