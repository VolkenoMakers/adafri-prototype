import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private themes: string[] = ['dark-mode', 'white-mode', 'auto-mode']
  private adafriThemeKey: string = 'adf-theme';

  constructor() { }

  initTheme(){ }

  setTheme(theme:string){
    if(!this.themes.includes(theme)) return
    localStorage.setItem(this.adafriThemeKey, theme)
    this.themes.forEach( val => {
      if(document.body.classList.contains(val)) {
        document.body.classList.remove(val)
      }
    })
    document.body.classList.add(theme)
  }

  getTheme(){
    let theme:string | null = 'white-mode' 
    if(localStorage.getItem(this.adafriThemeKey)) theme = localStorage.getItem(this.adafriThemeKey)
    return theme;
  }

  autoMode(){
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   this.setTheme('dark-mode')
    // }
    // alert("Coming soon...")
  }
}
