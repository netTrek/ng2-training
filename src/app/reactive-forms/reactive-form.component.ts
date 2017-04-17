import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gfk-reactive-form',
  template: `
    <p>
      reactive-form Works!
    </p>
    <form novalidate [formGroup]="user">
        <div formGroupName="account">
            <label for="username">formControlName="username"</label>
            <input type="text"
                   name="username"
                   id="username"
                   size="30" pInputText
                   placeholder="your name"
                   required
                   minlength="4"
                   formControlName="username"
            >

            <br>
            
            <div *ngIf="( ( usrname.dirty || usrname.touched) && usrname.errors )"
                 class="ui-messages ui-widget ui-corner-all ui-messages-error" style="display: block">
                <span *ngIf="usrname.errors?.required" class="ui-messages-summary">Fehler: </span>
                <span *ngIf="usrname.errors?.required" class="ui-messages-detail">Bitte trage einen Wert für den Benutzernamen ein!</span>
                <span *ngIf="!usrname.errors?.required && usrname.invalid" class="ui-messages-detail">Bitte trage min 4 Zeichen ein!</span>
            </div>
            
            
            <label for="usermail">formControlName="usermail"</label>
            <input type="email"
                   name="usermail"
                   id="usermail"
                   size="30" pInputText
                   placeholder="your mail"
                   formControlName="usermail"
            >
        </div>
        <label>
            formControlName="userbirthdate" <br>
            <p-calendar formControlName="userbirthdate"></p-calendar>
        </label>
    </form>

    <p>{{ user.value | json}}</p>
    <p>{{ user.valid | json}}</p>
  `,
  styles: [
      `label {
          display: block;
          margin-top: 10px;
      }`
  ]
})
export class ReactiveFormComponent implements OnInit {

  user: FormGroup;
  usrname: FormControl;

  constructor() { }

  ngOnInit() {
    this.usrname = new FormControl('', Validators.required );
    this.user = new FormGroup({
      account: new FormGroup({
        username: this.usrname,
        usermail: new FormControl('')
      }),
      userbirthdate: new FormControl(''),
    });
  }

}
