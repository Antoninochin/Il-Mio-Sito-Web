import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [LoginPage, SignUpPage],
  imports: [CommonModule, HttpClientModule, FormsModule, NgbModule, RouterLink,],
})
export class AuthModule { }
