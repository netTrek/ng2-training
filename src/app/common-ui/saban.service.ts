export class Saban {
  name = 'saban ünlü';

  constructor () {
    console.log ( 'saban service generated', Date.now() );
  }

  chgName () {
    this.name = 'peter müller';
  }


}
