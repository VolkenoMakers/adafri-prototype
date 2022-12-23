import { Component } from '@angular/core';
import { LanguageService } from './core/services/langages/language.service';
import { ThemesService } from './core/services/themes/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v4-prototype';
  public theme:string|null = 'white-mode'


  constructor(private languageService: LanguageService,public themeService: ThemesService){
     this.theme  = this.themeService.getTheme()
     if(this.theme !== null){
       this.themeService.setTheme(this.theme)
     }
  }
}
