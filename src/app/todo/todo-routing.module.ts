import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo.component";
import {AuthGuardService} from "../core/auth-guard.service";
import {NgModule} from "@angular/core";
/**
 * Created by zhangzhengkun on 2017/9/9.
 */

export const routes: Routes = [
  {
    path: 'todo/:filter',
    canActivate: [AuthGuardService],
    component: TodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
