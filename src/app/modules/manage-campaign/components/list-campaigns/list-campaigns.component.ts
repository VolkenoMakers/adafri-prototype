import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { Payment } from 'src/app/utils/data';

@Component({
  selector: 'app-list-campaigns',
  templateUrl: './list-campaigns.component.html',
  styleUrls: ['./list-campaigns.component.scss']
})
export class ListCampaignsComponent implements OnInit, AfterViewInit {

  public dataChart: GoogleChartInterface = {
    chartType: GoogleChartType.AreaChart,
    dataTable: [
      ['Heures', 'Search', 'Display', 'Facebook Ads', 'LinkedIn Ads'],
      ['02h',  1000,      400,      1000,      400],
      ['08h',  1170,      460,      1800,      900],
      ['14h',  660,       1120, 399, 1200],
      ['23h',  1030,      540, 300, 140]
    ],
    options: {
      'backgroundColor':  { fill:'transparent' },
      'colors': ['#0077B6', '#00B4D8', '#48CAE4', '#90E0EF'],
      'chartArea' : { left: 0,width: '100%' },
      'legend': 'top',
    },
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  // WEB TABLE 
  webDisplayedColumns: string[] = ['type', 'author_email', 'paymentDate', 'value'];
  webDataSource = new MatTableDataSource<Payment>(TRANSACTIONS);
  
  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngAfterViewInit() {
    this.webDataSource.paginator = this.paginator;
    this.webDataSource.sort = this.sort;
  }

}

const TRANSACTIONS: Payment[] = [
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  },
  {
    type: "recharge",
    author_email: "adafri.dev@gmail.com",
    paymentDate: "2021-08-17 13:22:34.317199Z",
    value: 500000
  }
]
