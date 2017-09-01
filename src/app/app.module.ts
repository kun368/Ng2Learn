import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthService} from "./core/auth.service";
import {RouterModule} from "@angular/router";
import { TodoComponent } from './todo/todo.component';
import {routing} from "./app.routes";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryTodoDbService} from "./todo/todo-data";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
