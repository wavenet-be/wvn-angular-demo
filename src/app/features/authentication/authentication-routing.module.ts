import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from "./authentication.component";
import {ProtectedComponent} from "./protected/protected.component";
import {AuthenticationGuard} from "@wavenet/ngx-wvn-core";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canLoad: [AuthenticationGuard],
    canActivate: [AuthenticationGuard],
    data: {
      roles: ['TEST_ROLE']
    }
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
