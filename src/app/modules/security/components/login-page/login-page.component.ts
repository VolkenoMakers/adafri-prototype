import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/services/langages/language.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor (
    private router: Router,
    public languageService: LanguageService,
    ) { 
    this.actualLanguage = this.languageService.userLanguage
  }

  public isLoading: boolean = false;
  public actualLanguage: string = 'fr'
  
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
  
  setLanguage(language: string){
    if(this.languageService.userLanguage === language) return
    this.actualLanguage = language
    this.languageService.setLanguage(language)
  }
}
