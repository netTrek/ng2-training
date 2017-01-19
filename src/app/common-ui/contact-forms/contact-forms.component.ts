import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baywa-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.scss']
})
export class ContactFormsComponent implements OnInit {

  formModel: { mail: string, name: string } = {
    name: '',
    mail: ''
  };

  name: string = '';
  mail: string = '';

  constructor() { }

  ngOnInit() {
  }

}
