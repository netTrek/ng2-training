import { Component } from '@angular/core';

@Component ( {
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
    title    = 'saban works!';
    cssclass = 'saban';
    label    = 'schönes bild';
    age      = 12;
    color    = 'blue';
    showSaban= false;

    imageSource = '../assets/images/logo-gross.png';

    constructor () {
        console.log ( `root comp with age:= ${this.age} ` );
        console.log ( `root comp with age:= ${this.age} ` );
        console.log ( `root comp with age:= ${this.age} ` );
    }

    chgAge ( newAge: number ) {
        this.age = newAge;
    }

    calcBirthYear (): number {
        const today: Date  = new Date ();
        const year: number = today.getFullYear ();
        return year - this.age;
    }
}
