import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

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

  @Input()
  public yAxisLabel = '';

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: 'red',
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Shots',
          font: {
            size: 20,
          },
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 15,
        },
      },
      y: {
        title: {
          display: true,
          text: this.yAxisLabel,
        },
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

    this.lineChartOptions!.scales!['y']! = {
      title: {
        display: true,
        text: this.yAxisLabel,
        font: {
          size: 20,
        },
      },
    };

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
