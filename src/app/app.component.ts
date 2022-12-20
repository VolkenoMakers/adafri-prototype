import { Component } from '@angular/core';
import { LanguageService } from './core/services/langages/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v4-prototype';

  constructor( private languageService: LanguageService ){
  }
}
