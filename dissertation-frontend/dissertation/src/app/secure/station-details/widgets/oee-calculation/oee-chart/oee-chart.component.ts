import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { OEE } from '../../../../../types/oee';

@Component({
  selector: 'app-oee-chart',
  templateUrl: './oee-chart.component.html',
  styleUrls: ['./oee-chart.component.scss'],
})
export class OeeChartComponent implements OnInit {
  title = 'OEE Chart';

  @Input()
  oeeCalculated: OEE = {
    performance: 0,
    quality: 0,
    availability: 0,
    oee: 0,
  };

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.oeeCalculated);
  }
}
