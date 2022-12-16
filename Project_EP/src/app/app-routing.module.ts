import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsgameComponent } from './home/detailsgame/detailsgame.component';
import { HomePage } from './home/home.page';
import { LoginPage } from './auth/login/login.page';
import { SignUpPage } from './auth/sign-up/sign-up.page';
import { SearchgamesComponent } from './searchgames/searchgames.component';

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
    path:'sign-up',
    component:SignUpPage,
  },
  {
    path:'detailsgame',
    component:DetailsgameComponent,
  },
  {
    path:'searchgames',
    component:SearchgamesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
