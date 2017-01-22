import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formModel: {name: string, count: number} = {
    name: '',
    count: 0
  };

  constructor() { }

  submitData () {
    console.warn ( 'submit data', this.formModel );
  }

  ngOnInit() {
  }

}
