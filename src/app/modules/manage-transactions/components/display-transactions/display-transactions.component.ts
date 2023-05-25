import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RechargeAccountComponent } from 'src/app/core/components/recharge-account/recharge-account.component';
import { Payment } from 'src/app/utils/data';

@Component({
  selector: 'app-display-transactions',
  templateUrl: './display-transactions.component.html',
  styleUrls: ['./display-transactions.component.scss']
})
export class DisplayTransactionsComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = ['type', 'author_email', 'paymentDate', 'value'];
  dataSource = new MatTableDataSource<Payment>(TRANSACTIONS);

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) { }

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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openRechargeDialog(){
    this.dialog.open(RechargeAccountComponent, {
      height: '230px',
      width: '310px',
    })
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