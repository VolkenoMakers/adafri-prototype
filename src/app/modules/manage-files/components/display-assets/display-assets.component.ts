import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreateSingleContactComponent } from '../create-single-contact/create-single-contact.component';
import { CreateGroupContactsComponent } from '../create-group-contacts/create-group-contacts.component';

@Component({
  selector: 'app-display-assets',
  templateUrl: './display-assets.component.html',
  styleUrls: ['./display-assets.component.scss']
})
export class DisplayAssetsComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Storage', 'Used'],
      ['Utilisé',     11],
      ['Libre',      88],
    ],
    options: {
      'backgroundColor':  { fill:'transparent' },
      'pieHole': 0.5,
      'colors': ['#0077B6', '#48CAE4'],
      'chartArea' : { top: 10, width: '100%' },
      'pieSliceTextStyle': {color: 'transparent'},
      'legend': {
        'position': 'bottom'
      },
      'pieStartAngle': 180,
    },
  };
  public isCreateGroupActive: boolean;

  displayedColumns: string[] = [
    "select",
    "position",
    "firstname",
    "lastname",
    "phone_number",
    "actions"
  ];

  dataSource = new MatTableDataSource<ContactElement>(CONTACT_ELEMENT);
  selection = new SelectionModel<ContactElement>(true, []);

  constructor(public dialog: MatDialog) { 
    this.isCreateGroupActive  = false;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  uploadFile(){
    alert('upload asset')
  }

  selectHandler(row: ContactElement) {
    if (this.selection.isSelected(row)) {
      this.selection.deselect(row);
    }
    this.selection.toggle(row);
    this.selection.selected.length > 4 ? this.isCreateGroupActive  = true : this.isCreateGroupActive = false;
  }

  createContact(){
    this.dialog.open(CreateSingleContactComponent, {
      // data: {name: this.name, animal: this.animal},
    });
  }

  createGroupContact(){
    if(this.selection.selected.length < 5) return;
    console.log(this.selection.selected)
    this.dialog.open(CreateGroupContactsComponent, {
      data: { contacts: this.selection.selected },
    });
  }
}

export interface ContactElement {
  position: number;
  firstname: string;
  lastname: string;
  phone_number:string;
}

const CONTACT_ELEMENT: ContactElement[] = [
  { position: 1, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 2, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 3, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 4, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 5, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 6, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 7, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 8, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 9, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 10, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 11, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
  { position: 12, firstname: "Cheikh Tidiane", lastname: "Ndiaye", phone_number: "221771234567"},
]