import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adf-btn',
  templateUrl: './adf-btn.component.html',
  styleUrls: ['./adf-btn.component.scss']
})
export class AdfBtnComponent implements OnInit {

  @Input() text = 'text'; 
  @Input() icon? :string ;
  @Input() isOutlined: boolean = false;
  @Input() isDisabled: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
