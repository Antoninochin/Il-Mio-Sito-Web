import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsgameComponent } from './home/detailsgame/detailsgame.component';
import { HomePage } from './home/home.page';
import { LoginPage } from './auth/login/login.page';
import { SignUpPage } from './auth/sign-up/sign-up.page';

const routes: Routes = [
  {
    path:'',
    component:HomePage,
  },
  {
  path:'search/:game-search',
  component:HomePage,
  },
  {
    path:'login',
    component:LoginPage,
  },
  {
    path:'sign-Up',
    component:SignUpPage,
  },
  {
    path:'detailsgame',
    component:DetailsgameComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
