import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  public isLoading: boolean = false;
  
  ngOnInit(): void {
  }

  login(){
    this.isLoading = true
    setTimeout(() => {
      this.router.navigate(['overview'])
    }, 3000);
  }

  register(){
    this.router.navigate(['security/register'])
  }
}
