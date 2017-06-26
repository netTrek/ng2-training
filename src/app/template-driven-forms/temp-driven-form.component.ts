import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-temp-driven-form',
  template: `
    <p>
      temp-driven-form Works!
    </p>
    
    <!--
    <h3>Advanced</h3>
    <p-autoComplete [(ngModel)]="brand" [suggestions]="filteredBrands" (completeMethod)="filterBrands($event)" [size]="30"
                    [minLength]="1" placeholder="Hint: type 'v' or 'f'" [dropdown]="true" (onDropdownClick)="handleDropdownClick($event)">
        <ng-template let-brand pTemplate="item">
            <div class="ui-helper-clearfix" style="border-bottom:1px solid #D5D5D5">
                <img src="showcase/resources/demo/images/car/{{brand}}.gif" style="width:32px;display:inline-block;margin:5px 0 2px 5px"/>
                <div style="font-size:18px;float:right;margin:10px 10px 0 0">{{brand}}</div>
            </div>
        </ng-template>
    </p-autoComplete>
    <span style="margin-left:50px">Brand: {{brand||'none'}}</span>
    -->

    <form novalidate #f="ngForm" style="background-color: azure; padding-left: 20px">

        <p>form - #f="ngForm"</p>
        
        
        <div ngModelGroup="account" style="background-color: cornsilk; padding-left: 20px">

            <p>div - ngModelGroup="account"</p>

            <label for="username">#usrname="ngModel"</label>
            <input type="text"
                   name="username"
                   ngModel
                   #usrname="ngModel"
                   id="username"
                   size="30" pInputText
                   placeholder="your name"
                   required
                   minlength="4"
            >
            <br>
            <div *ngIf="( ( usrname.dirty || usrname.touched) && usrname.errors )" 
                 class="ui-messages ui-widget ui-corner-all ui-messages-error" style="display: block">
                <span *ngIf="usrname.errors?.required" class="ui-messages-summary">Fehler: </span>
                <span *ngIf="usrname.errors?.required" class="ui-messages-detail">Bitte trage einen Wert für den Benutzernamen ein!</span>
                <span *ngIf="!usrname.errors?.required && usrname.invalid" class="ui-messages-detail">Bitte trage min 4 Zeichen ein!</span>
            </div>

            <label for="usermail">#usrmail="ngModel"</label>
            <input type="email" name="usermail" id="usermail" ngModel #usrmail="ngModel"  placeholder="your mail" size="30" pInputText>
        </div>

        <label for="userbirthdate">#usrdate="ngModel"</label>
        <input type="date" name="userbirthdate" id="userbirthdate" ngModel #usrdate="ngModel" placeholder="your birthdate" pInputText>

      <input type="submit" [disabled]="f.invalid">
    </form>

    <button (click)="log(f)">#f</button>
    <button (click)="log(usrname)">#usrname</button>
    
    
    <p>
        f.value <br>
        {{ f.value | json }}
    </p>
    
    <p>
        usrname.errors <br>
        {{ usrname.errors | json }}
    </p>
    
    <p>
        usrname.valid <br>
        {{ usrname.valid | json }}
    </p>

      
  `,
  styles: []
})
export class TempDrivenFormComponent implements OnInit {



  constructor() { }

  log( f: any ) {
    console.log ( f );
  }

  ngOnInit() {
  }

  /*
   text: string;
   disabled = true;
   filteredBrands: any[];
   brand: string;
   brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
   */
  /*
  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      const brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

  handleDropdownClick() {
    this.filteredBrands = [];

    // mimic remote call
    setTimeout(() => {
      this.filteredBrands = this.brands;
    }, 100);
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  */
}
