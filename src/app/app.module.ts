import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommonUIModule } from './common-ui/common-ui.module';
import { UserService } from './service/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUIModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
