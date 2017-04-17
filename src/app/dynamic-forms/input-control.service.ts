import { Injectable } from '@angular/core';
import { InputBaseModel } from './model/InputBaseModel';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Injectable()
export class InputControlService {

  constructor() { }

  toFormGroup(inputModels: InputBaseModel<any>[] ) {
    const group: any = {};


    inputModels.forEach(inputModel => {
      const validators: ValidatorFn | ValidatorFn[] = [];
      if ( inputModel.required === true ) {
        validators.push( Validators.required );
      }
      if ( inputModel.minLength !== null ) {
        validators.push( Validators.minLength( inputModel.minLength ) );
      }
      if ( inputModel.maxLength !== null ) {
        validators.push( Validators.maxLength( inputModel.maxLength ) );
      }

      group[inputModel.key] = validators.length > 0
                                  ? new FormControl(inputModel.value || '', validators )
                                  : new FormControl(inputModel.value || '');
    });

    return new FormGroup(group);
  }

}
