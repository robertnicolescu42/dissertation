import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, PluginChartOptions } from 'chart.js';
import { OEE } from '../../../../../types/oee';
import { Colors } from 'chart.js';

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
  public barChartPlugins: ChartConfiguration<'bar'>['plugins'] = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Performance', 'Quality', 'Availability', 'OEE'],
    datasets: [],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: 'red',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.oeeCalculated);
    this.barChartData = {
      labels: ['Performance', 'Quality', 'Availability', 'OEE'],
      datasets: [
        {
          data: [
            this.oeeCalculated.performance,
            this.oeeCalculated.quality,
            this.oeeCalculated.availability,
            this.oeeCalculated.oee,
          ],
          backgroundColor: ['red', 'blue', 'pink', 'green'],
          label: 'OEE Values',
        },
      ],
    };
  }
}
