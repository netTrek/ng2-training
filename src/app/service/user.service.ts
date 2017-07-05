import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  name = 'Peter';
  age = 41;


  private uid: number = Date.now();

  constructor( public http: Http ) {
    console.log ( this.uid );
  }

  getAge (): number {
    return this.age;
  }

}
