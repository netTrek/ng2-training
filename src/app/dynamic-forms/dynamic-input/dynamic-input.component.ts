import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBaseModel } from '../model/InputBaseModel';
import { InputType } from '../model/input-type.enum';

@Component({
  selector: 'gfk-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent implements OnInit {

  @Input() inputModel: InputBaseModel<any>;
  @Input() form: FormGroup;

  get isValid()   { return this.form.controls[this.inputModel.key].valid; }
  get errors ()   { return this.form.controls[this.inputModel.key].errors; }
  get dirty ()    { return this.form.controls[this.inputModel.key].dirty; }
  get touched ()  { return this.form.controls[this.inputModel.key].touched; }


  InputType: any = InputType;

  constructor() { }

  ngOnInit() {
  }

}
