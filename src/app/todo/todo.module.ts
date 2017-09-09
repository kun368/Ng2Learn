import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TodoComponent} from "./todo.component";
import {TodoFooterComponent} from "./todo-footer/todo-footer.component";
import {TodoHeaderComponent} from "./todo-header/todo-header.component";
import {TodoService} from "./todo.service";
import {routing} from "./todo.routes";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
/**
 * Created by zhangzhengkun on 2017/9/9.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
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
export class TodoModule {

}
