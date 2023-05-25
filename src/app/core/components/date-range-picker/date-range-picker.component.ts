import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as dayjs from 'dayjs'
import moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {
  
  public ranges?: any;
  public alwaysShowCalendars: boolean;
  public selected?: {startDate: dayjs.Dayjs, endDate: dayjs.Dayjs};
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];
  
  public today?:string;
  // public yesterday:string|undefined;
  // public seven_last_days:string|undefined;
  // public show_last_30_days:string|undefined;


  constructor(private translate:TranslateService) {
    this.alwaysShowCalendars = true;
    this.translate.get(`navigation.dashboard.date.today`).subscribe((res)=>{
      this.today = res
    })

    this.ranges = {
      [`${this.today}`]: [moment(), moment()],
      'Hier': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Les 7 derniers jours': [moment().subtract(6, 'days'), moment()],
      'Les 30 derniers jours': [moment().subtract(29, 'days'), moment()],
      'Ce mois-ci': [moment().startOf('month'), moment().endOf('month')],
      'Le mois dernier': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }

    // this.selected = {startDate: new Dayjs(), endDate: Dayjs()}
   }
  ngOnInit(): void {
  
  }
  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }
}
