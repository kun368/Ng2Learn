import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TodoModule} from "./todo/todo.module";
import {AppRoutingModule} from "./app-routing.module";
import {MdlModule} from "angular2-mdl";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TodoModule,
    MdlModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
