import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  isFullScreen:boolean = false 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSearchDialog(){
    this.dialog.open(SearchDialog, {position: { top:'20px' }, panelClass: 'search-dialog-panel'} );
  }

  setFullScreen(){
    let element = document.documentElement
    this.isFullScreen ? document.exitFullscreen(): element.requestFullscreen();
    this.isFullScreen = !this.isFullScreen
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