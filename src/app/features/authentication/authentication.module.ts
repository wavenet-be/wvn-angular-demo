import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {AuthenticationComponent} from './authentication.component';
import {ProtectedComponent} from './protected/protected.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
  ],
  declarations: [
    AuthenticationComponent,
    ProtectedComponent,
    LoginComponent
  ],
  providers: []
})
export class AuthenticationModule {
}
