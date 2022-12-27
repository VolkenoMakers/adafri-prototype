import { Component, OnInit } from '@angular/core';
import { Subscription, merge, of, fromEvent, map } from 'rxjs';
import { LanguageService } from './core/services/langages/language.service';
import { ThemesService } from './core/services/themes/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'v4-prototype';
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  public theme:string|null = 'white-mode'
  

  constructor(private languageService: LanguageService,public themeService: ThemesService){
     this.theme  = this.themeService.getTheme()
     if(this.theme !== null){
       this.themeService.setTheme(this.theme)
     }
  }
  ngOnInit(): void {
    this.checkNetworkStatus();
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        console.log('status', status);
        this.networkStatus = status;
      });
  }
}
