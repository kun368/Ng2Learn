import {NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {UserService} from "./user.service";
/**
 * Created by zhangzhengkun on 2017/9/10.
 */

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule)
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  }
}
