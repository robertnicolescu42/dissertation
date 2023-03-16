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
  public lineChartData: ChartConfiguration<'line'>['data'] | any;

  @Input()
  public lineChartColors: any[] = [];

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
    let fullData: any[] = [];
    let tempData = this.lineChartData[0].data;

    tempData.forEach((element: any) => {
      fullData.push(element.y);
    });

    let colors = [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ];

    this.lineChartData = {
      labels: this.lineChartLabels,
      datasets: [
        {
          label: 'RUL Info',
          data: fullData,
          fill: false,
          borderColor: this.lineChartColors[0].borderColor,
          pointBorderColor: this.lineChartColors[0].borderColor,
          pointBackgroundColor: this.lineChartColors[0].borderColor,
          tension: 0.1,
        },
      ],
    };
  }
}
