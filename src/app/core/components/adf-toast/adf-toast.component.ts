import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adf-toast',
  templateUrl: './adf-toast.component.html',
  styleUrls: ['./adf-toast.component.scss']
})
export class AdfToastComponent implements OnInit {

  @Input() icon:string = "";
  @Input() title:string = "";
  @Input() message:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
