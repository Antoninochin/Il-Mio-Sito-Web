import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiziService } from '../auth/servizi.service';

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {
  error = undefined;
  constructor(private authService: ServiziService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.authService.signUp(form.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.error = err.error;
      }
    );
    form.reset()
  }
}
