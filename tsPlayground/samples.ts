function Mensch( name ) {
  this.name = name;
}

Mensch.prototype.sagDeinenName = function () {
  console.log('mein name ist', this.name);
}

var m = new Mensch('saban');
m.sagDeinenNamen();

interface IHuman {
  name: string;
  gender?: string|null;
  sagMirDeinenNamen(): string;
}

class Human implements IHuman {

  readonly val: number = 10;

  constructor( public name: string ) {

  }
  // berechneGeburtstag(date?: number) {
  berechneGeburtstag(date: number = Date.now()) {
    // brechnungen mit dem Datum;

  }

  sagMirDeinenNamen( ...rest: any[]): string {
    console.log(this.name);
    return this.name;
  }
}

class Man extends Human {
  constructor(name: string) {
    super(name)
  }

  bierTrinken() {
    //
  }

  sagMirDeinenNamen(): string {
    return super.sagMirDeinenNamen();
  }
}

let h = new Human('saban');
h.berechneGeburtstag();

/*
 let h = new Human('saban' );

 for (let i = 0; i < 10; i++) {
 console.log(i);
 for (let i = 0; i < 10; i++) {
 console.log(i);
 }
 }
 */

// <button onclick="methode()"


// <button id="btn"

document.getElementById('btn')
        .addEventListener('click', function () {
          console.log(this);
        });

class MenuButton {

  label = 'Saban Button';

  constructor(public btn: HTMLButtonElement) {
    this.init();
  }

  private init() {
    this.btn
        .addEventListener('click', ()=> {
          console.log(this.label );
        });

    /** old school
     var that = this;
     this.btn
     .addEventListener('click', function () {
        console.log(that.label );
      });
     */
  }
}

let btn: MenuButton = new MenuButton ( <HTMLButtonElement>document.getElementById('btn') )
