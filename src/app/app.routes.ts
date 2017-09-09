import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

/**
 * Created by zhangzhengkun on 2017/9/1.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    redirectTo: 'todo'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
export const routing = RouterModule.forRoot(routes);
