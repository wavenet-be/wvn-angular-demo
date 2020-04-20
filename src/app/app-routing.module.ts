import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthenticationModule} from "./features/authentication/authentication.module";

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        enableTracing: false
      }
    ),
    AuthenticationModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
