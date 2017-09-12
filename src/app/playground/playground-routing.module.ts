import {RouterModule, Routes} from "@angular/router";
import {PlaygroundComponent} from "./playground.component";
import {NgModule} from "@angular/core";
/**
 * Created by zhangzhengkun on 2017/9/11.
 */

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule {}
