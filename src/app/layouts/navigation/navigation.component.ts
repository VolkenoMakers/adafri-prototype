import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterContentInit {

  public isLoading: boolean = true;
  public selected: { startDate: 22; endDate: 25; } | undefined;
  public isToggled:boolean = false; 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  toggleSidebar(){
    this.isToggled = !this.isToggled
  }
}
