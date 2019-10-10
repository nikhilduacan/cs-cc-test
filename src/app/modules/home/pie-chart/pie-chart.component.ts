import { Component, OnInit, Input } from '@angular/core';

import { IPerson } from '../models/person';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() chartData: Array<any>;

  public chartLabels = ['Children(0-14 years)', 'Youth(15-24 years)', 'Adults(25-64 years)', 'Seniors(65 years and above)'];
  public chartData1 = this.chartData;
  public chartType = 'pie';
  constructor() {
   }

  ngOnInit() {
    // this.createChart();
  }

}
