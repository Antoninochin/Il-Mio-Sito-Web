import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { SignUpPage } from './sign-up/sign-up.page';

const routes: Routes = [
  {
    path:'',
    component:HomePage,
  },
  {
    path:'login',
    component:LoginPage,
  },
  {
    path:'sign-Up',
    component:SignUpPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
