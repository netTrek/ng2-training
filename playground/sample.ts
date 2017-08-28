class Adresse {
  constructor ( public city: string ) {

  }
}

interface IMensch {
  name: string;

  // haar: string;
  sagMirDeinenNamen( param: string, anrede: string, ...rest: string[] );
}

class Mensch implements IMensch {

  static MAN = 'Mann';

  static readonly WOMNAN: string = 'Frau';
  // name: string;

  private _adr: Adresse;

  constructor ( public name: string, private age: number ) {
    // this.name = name;
  }

  sagMirDeinenNamen ( param: string, anrede: string = 'frau', ...rest: string[] ) {
    console.log ( param, anrede, this.name );
  }

  protected wieAltBisDu (): number {
    console.log ( this.age );
    return this.age;
  }

  setAdress ( adr: Adresse ) {
    this._adr = adr;
  }
}

class Frau extends Mensch {
  constructor ( name: string, age: number ) {
    super ( name, age );
  }

  protected wieAltBisDu (): number {
    return super.wieAltBisDu () - 10;
  }
}

class Man extends Mensch {
  constructor ( name: string, age: number ) {
    super ( name, age );
  }

  protected wieAltBisDu (): number {

    for ( let i = 0; i < 10; i ++ ) {
      console.log ( i );
      for ( let i = 0; i < 10; i ++ ) {
        console.log ( i );
      }
    }
    console.log ( i );

    return super.wieAltBisDu () - 10;
  }
}

let m: Mensch = new Mensch ( 'saban', 43 );
m.sagMirDeinenNamen ( '123', 'herr', '123', 'saban' );
m.setAdress ( new Adresse ( 'dorsten' ) );

let user: IMensch[] = [
  <IMensch>{
    name             : 'saban',
    sagMirDeinenNamen: function ( param: string, anrede: string = 'frau', ...rest: string[] ) {
    }

  }
];

// <button id="btn" >

class NavButton {

  myButtonTest = 123;

  constructor ( private _btn: HTMLButtonElement ) {
    this.init ();
  }

  private init () {
    this._btn.addEventListener ( 'click', () => {
      console.log ( this, this.myButtonTest );
    } );
    /*
    var that = this;
    this._btn.addEventListener('click', function () {
        console.log(that);
        console.log(that.myButtonTest);
    });
    */
  }
}

let navBtn: NavButton = new NavButton ( <HTMLButtonElement>document.getElementById ( 'btn' ) );

function werteFct ( wert1: number, wert2: number ) {

}

let list: number[] = [ 1,
                       2
];
// werteFct(); //...list ==== 1,2

let list2: number[] = [ ...list,
                        3,
                        4
];

let obj1: { name: string }              = { name: 'saban' };
let obj2: { name: string, age: number } = { ...obj1, age: 43 };


