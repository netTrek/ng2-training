import { Component, OnInit } from '@angular/core';
import { InputBaseModel } from './model/InputBaseModel';
import { TextModel } from './model/TextModel';
import { SelectModel } from './model/SelectModel';

@Component({
  selector: 'gfk-dynamic-form-loader',
  template: `
    <p>
      dynamic-form-loader Works!
    </p>

    <gfk-dynamic-form [inputModels]="inputModels"></gfk-dynamic-form>
  `,
  styles: []
})
export class DynamicFormLoaderComponent implements OnInit {

  inputModels: InputBaseModel<any>[];

  constructor() { }

  ngOnInit() {

    this.inputModels = [
      new TextModel ( {
        key: 'firstName',
        label: 'Vorname',
        value: 'Saban',
        required: true,
        minLength: 4,
        maxLength: 8
      }),
      new TextModel ( {
        key: 'lastName',
        label: 'Nachname',
        value: 'Ünlü',
        required: true,
        minLength: 4,
        maxLength: 8
      }),
      new SelectModel( {
        key: 'city',
        label: 'Stadt',
        options: [
          { label: 'Dorsten', value: 'dorsten' },
          { label: 'Frankfurt a.M.', value: 'fam' }
        ],
        value: 'fam'
      } )
    ];
  }

}
