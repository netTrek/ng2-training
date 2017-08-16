import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ContactComponent, ContactFormComponent, ContactMapComponent],
  exports: [ContactComponent, ContactFormComponent, ContactMapComponent]
})
export class ContactModule { }
