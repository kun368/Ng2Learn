import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo.component";
/**
 * Created by zhangzhengkun on 2017/9/9.
 */

export const routes: Routes = [
  {
    path: 'todo/:filter',
    component: TodoComponent
  },
];
export const routing = RouterModule.forChild(routes);
