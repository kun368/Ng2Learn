import {RouterModule, Routes} from "@angular/router";
import {PlaygroundComponent} from "./playground.component";
import {NgModule} from "@angular/core";
import {OneComponent} from "./one/one.component";
import {TwoComponent} from "./two/two.component";
import {ThreeComponent} from "./three/three.component";
/**
 * Created by zhangzhengkun on 2017/9/11.
 */

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
    children: [
      {
        path: 'one',
        component: OneComponent,
        children: [
          {
            path: 'three',
            component: ThreeComponent
          }
        ]
      },
      {
        path: 'two',
        component: TwoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule {}
