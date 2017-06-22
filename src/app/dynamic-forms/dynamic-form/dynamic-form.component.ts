import { Component, Input, OnInit } from '@angular/core';
import { InputControlService } from '../input-control.service';
import { InputBaseModel } from '../model/InputBaseModel';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'gfk-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [InputControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input()
  inputModels: InputBaseModel<any>[] = [];

  payload: string;

  form: FormGroup;

  constructor( private ics: InputControlService ) { }

  ngOnInit() {
    this.form = this.ics.toFormGroup( this.inputModels );

    /**
     * noch zu optimieren!
     * @type {FormControl}
     */
    const firstNameControl: FormControl = <FormControl>this.form.get('firstName');
    firstNameControl.registerOnChange ( ( ...args ) => {
      console.log ( args, 'chage' );
    });
  }

  /**
   * mock - später löschen
   */
  testChg () {
    /**
     * falsche stelle
     * @type {FormControl}
     */
    const firstNameControl: FormControl = <FormControl>this.form.get('firstName');
    firstNameControl.setValue( 'Test' );
  }

  onSubmit () {
    this.payload = JSON.stringify( this.form.value );
    console.log ( this.payload );
  }

}
