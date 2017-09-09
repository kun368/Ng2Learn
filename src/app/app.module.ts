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
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import {TodoModule} from "./todo/todo.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    TodoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
