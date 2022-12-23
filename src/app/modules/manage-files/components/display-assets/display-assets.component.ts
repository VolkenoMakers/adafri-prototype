import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';


@Component({
  selector: 'app-display-assets',
  templateUrl: './display-assets.component.html',
  styleUrls: ['./display-assets.component.scss']
})

export class DisplayAssetsComponent implements OnInit {

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
        'position': 'bottom',
      },
      'pieStartAngle': 180,
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(){
    alert('upload asset')
  }
}
