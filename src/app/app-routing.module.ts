import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login-component/login.component";
import {RegistrationComponent} from "./registration-component/registration.component";
import {UserPanelComponent} from "./user-pannel-component/user-panel.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "panel", component: UserPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
