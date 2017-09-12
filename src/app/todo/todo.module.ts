import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TodoComponent} from "./todo.component";
import {TodoFooterComponent} from "./todo-footer/todo-footer.component";
import {TodoHeaderComponent} from "./todo-header/todo-header.component";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {CoreModule} from "../core/core.module";
import {TodoRoutingModule} from "./todo-routing.module";
import {MdlModule} from "angular2-mdl";
/**
 * Created by zhangzhengkun on 2017/9/9.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TodoRoutingModule,
    CoreModule,
    MdlModule
  ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  providers: [
  ]
})
export class TodoModule {}
