import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiziService } from '../servizi.service';


@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  error = undefined
  showAlert = false
  constructor(private authService: ServiziService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
          this.authService.isLoggedIn = true;
          this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.error = err.error;
        this.showAlert = !this.showAlert
      })
  }
  close(){
    this.showAlert = !this.showAlert
  }
}
