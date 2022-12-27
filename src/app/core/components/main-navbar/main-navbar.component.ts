import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/langages/language.service';
import { ThemesService } from '../../services/themes/themes.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  // encapsulation: ViewEncapsulation,
})
export class MainNavbarComponent implements OnInit {

  public isFullScreen:boolean = false 
  public isDarkMode: boolean = false;
  public activeTheme: string = 'white-mode'
  public actualLanguage: string = 'fr'

  
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public themeService: ThemesService,
    public languageService: LanguageService
    ) 
    { 
     if (this.themeService.getTheme() === 'dark-mode') {
      this.activeTheme = 'dark-mode'
      this.isDarkMode = true
     }
     this.actualLanguage = this.languageService.userLanguage;
    }

  ngOnInit(): void { }

  openSearchDialog(){
    this.dialog.open(SearchDialog, {position: { top:'20px' }, panelClass: 'search-dialog-panel'} );
  }

  setFullScreen(){
    let element = document.documentElement
    this.isFullScreen ? document.exitFullscreen(): element.requestFullscreen();
    this.isFullScreen = !this.isFullScreen
  }

  setTheme(mode:string){
    if(this.themeService.getTheme() !== mode) {
      this.themeService.setTheme(mode)
      this.activeTheme = mode
      this.isDarkMode = !this.isDarkMode
    }
  }

  setLanguage(language: string){
    if(this.languageService.userLanguage === language) return
    this.actualLanguage = language
    this.languageService.setLanguage(language)
  }

  logout(){
    this.router.navigate(['security/login'])
  }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialog {
  constructor() {}
}