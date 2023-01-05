import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { RechargeAccountComponent } from '../recharge-account/recharge-account.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  public toastMessage: string = "Lorem ipsum"
  public isLoading: boolean = true;
  public dataChart: GoogleChartInterface = {
    chartType: GoogleChartType.AreaChart,
    dataTable: [
      ['Heures', 'Search', 'Display'],
      ['02h',  1000,      400],
      ['08h',  1170,      460],
      ['14h',  660,       1120],
      ['23h',  1030,      540]
    ],
    options: {
      'backgroundColor':  { fill:'transparent' },
      // 'title': 'Campagnes',
      // 'titleColor': '#FFF',
      'colors': ['#0077B6', '#48CAE4'],
      'chartArea' : { left: 0, width: '100%' },
      'legend': {
        'position': 'bottom',
        // 'color': '#FFF'
      },
      // 'legendColor': '#FFF',
      // 'hAxis': {
      //   'textStyle': {
      //     'color': '#FFF'
      //   }
      // }
    },
  };
  images = [945, 1010, 985].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public panelOpenState:boolean = true;
  public breakpointPerformances: number = 9;
  public breakpointAccount: number = 3;
  public breakpointFacturation: number = 4;
  public breakpointRecap: number = 8;
  
  constructor(public dialog: MatDialog) {
    if (window.innerWidth <= 500) {
      this.breakpointPerformances = 12;
      this.breakpointAccount = 12;
      this.breakpointFacturation = 12;
      this.breakpointRecap = 12;
    }
   }

  ngAfterViewInit(): void { 
    
  }

  openRechargeDialog(){
    this.dialog.open(RechargeAccountComponent, {
      height: '230px',
      width: '310px',
    })
  }

  onResize() {
    if (window.innerWidth > 500) {
      this.breakpointPerformances = 9;
      this.breakpointAccount = 3;
      this.breakpointFacturation = 4;
      this.breakpointRecap = 8;
    } else {
      this.breakpointPerformances = 12;
      this.breakpointAccount = 12;
      this.breakpointFacturation = 12;
      this.breakpointRecap = 12;
    }
  }
}