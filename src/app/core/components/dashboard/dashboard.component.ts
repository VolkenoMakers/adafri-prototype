import { AfterViewInit, Component } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

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
      'title': 'Campagnes',
      'colors': ['#0077B6', '#48CAE4'],
      'chartArea' : { left: 0, width: '100%' },
      'legend':'bottom',
    },
  };

  constructor() { }

  ngAfterViewInit(): void { 
    
  }
}
