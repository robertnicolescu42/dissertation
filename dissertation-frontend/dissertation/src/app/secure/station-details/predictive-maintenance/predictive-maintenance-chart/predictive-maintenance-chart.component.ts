import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, PluginChartOptions } from 'chart.js';
import { Colors } from 'chart.js';

@Component({
  selector: 'app-predictive-maintenance-chart',
  templateUrl: './predictive-maintenance-chart.component.html',
  styleUrls: ['./predictive-maintenance-chart.component.scss'],
})
export class PredictiveMaintenanceChartComponent {
  title = 'RUL Info';
  public lineChartLegend = true;
  public lineChartPlugins: ChartConfiguration<'line'>['plugins'] = [];

  @Input()
  public lineChartData: any;

  @Input()
  public lineChartLabels: ChartConfiguration<'line'>['data']['labels'] = [];

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: 'red',
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    // this.lineChartData = {
    //   datasets: [],
    // };
    // this.lineChartData = {
    //   labels: ['Performance', 'Quality', 'Availability', 'OEE'],
    //   datasets: [
    //     {
    //       data: [77, 88, 99, 100],
    //       backgroundColor: ['red', 'blue', 'pink', 'green'],
    //       label: 'OEE Values',
    //     },
    //   ],
    // };
    console.log(
      '🚀 ~ file: predictive-maintenance-chart.component.ts:45 ~ PredictiveMaintenanceChartComponent ~ ngOnInit ~ this.lineChartData:',
      this.lineChartData
    );

    let fullData: any[] = [];
    let tempData = this.lineChartData[0].data;

    tempData.forEach((element: any) => {
      fullData.push(element.y);
    });

    this.lineChartData = {
      labels: this.lineChartLabels,
      datasets: [
        {
          label: 'RUL Info',
          data: fullData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    console.log(
      '🚀 ~ file: predictive-maintenance-chart.component.ts:23 ~ PredictiveMaintenanceChartComponent ~ lineChartLabels:',
      this.lineChartLabels
    );
  }
}
