import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { UserService } from './service/user.service';
import { ServiceModule } from './service/service.module';
import { CommonUiModule } from './common-ui/common-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServiceModule,
    CommonUiModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
