import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adf-input',
  templateUrl: './adf-input.component.html',
  styleUrls: ['./adf-input.component.scss']
})
export class AdfInputComponent implements OnInit {

  @Output() content:string = '';
  @Output() newItemEvent = new EventEmitter<string>()
  @Input() type?:string;
  @Input() placeholder?:string;

  constructor() { 

  }

  ngOnInit(): void {

  }

  dirtyListener(value: string){
    this.newItemEvent.emit(value);
  }
}
