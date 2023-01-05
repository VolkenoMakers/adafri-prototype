import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge-account',
  templateUrl: './recharge-account.component.html',
  styleUrls: ['./recharge-account.component.scss']
})
export class RechargeAccountComponent implements OnInit {

  public number: number = 0
  public isNumberValid: boolean =  false

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value:string){
    if(parseInt(value) && parseInt(value) > 10){
      this.number = parseInt(value)
      this.isNumberValid = true
    }else{
      this.number = 0
      this.isNumberValid = false
    }
  }

  makeRecharge(){
    alert('recharging your account')
  }
}
