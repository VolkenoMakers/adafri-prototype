import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-create-display',
  templateUrl: './create-display.component.html',
  styleUrls: ['./create-display.component.scss']
})
export class CreateDisplayComponent implements OnInit {

  public enteredUrl: string = 'https://www.expat-dakar.com' 
  
  constructor() { 
    this.renderWebsite()
  }

  ngOnInit(): void {
  }

  renderWebsite(){
   
  }
}
