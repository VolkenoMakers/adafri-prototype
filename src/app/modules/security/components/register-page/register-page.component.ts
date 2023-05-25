import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/services/langages/language.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public isLoading: boolean = false
  public actualLanguage:string

  constructor(private router: Router, private languageService: LanguageService) {
    this.actualLanguage = this.languageService.userLanguage
   }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['security/login']) 
  }

  register(){
    this.isLoading = true
    setTimeout(() => {
      this.router.navigate(['security/confirm'])
    }, 3000);
  }

  registerGoogle(){}

  setLanguage(language: string){
    if(this.languageService.userLanguage === language) return
    this.actualLanguage = language
    this.languageService.setLanguage(language)
  }

}
