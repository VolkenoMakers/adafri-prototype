import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs'
import moment from 'moment';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {
  
  public ranges: any = {
    'Aujourd\'hui': [moment(), moment()],
    'Hier': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Les 7 derniers jours': [moment().subtract(6, 'days'), moment()],
    'Les 30 derniers jours': [moment().subtract(29, 'days'), moment()],
    'Ce mois-ci': [moment().startOf('month'), moment().endOf('month')],
    'Le mois dernier': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  public alwaysShowCalendars: boolean;
  public selected?: {startDate: dayjs.Dayjs, endDate: dayjs.Dayjs};
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];
  

  constructor() {
    this.alwaysShowCalendars = true;
    // this.selected = {startDate: new Dayjs(), endDate: Dayjs()}
   }
  ngOnInit(): void {
  
  }
  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }
}
