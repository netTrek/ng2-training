import { Component, Input, OnInit } from '@angular/core';
import { InputControlService } from '../input-control.service';
import { InputBaseModel } from '../model/InputBaseModel';
import { FormGroup } from '@angular/forms';

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
  }

  onSubmit () {
    this.payload = JSON.stringify( this.form.value );
    console.log ( this.payload );
  }

}
