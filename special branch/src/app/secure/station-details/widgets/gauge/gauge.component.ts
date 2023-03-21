import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit, OnChanges {
  @Input()
  size!: number;

  @Input()
  value!: number;

  @Input()
  color!: string;

  @Input()
  isMobile: boolean = false;

  @Input()
  label!: string;

  gaugeSizeLimit = 50;

  valueArray!: number[];
  correctedValue!: number | string;

  valueFontSize!: number;
  labelFontSize!: number;
  trendFontSize!: number;

  colors = [];

  doughnutChartType: ChartType = 'doughnut';

  doughnutChartOptions: any = {
    title: {
      display: false,
    },
    circumference: 1.5 * Math.PI,
    rotation: 0.75 * Math.PI,
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    tooltips: {
      enabled: false,
    },
    hover: {
      mode: null,
    },
    plugins: {
      datalabels: {
        display: false,
        color: '#fff',
      },
    },
  };

  chartColors = [
    {
      backgroundColor: ['#d1d2d3', '#d1d2d3'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.correctedValue = isNaN(this.value) || this.value < 0 ? 'n/a' : this.value;
    this.valueArray = this.value < 0 ? [0, 100] : this.value > 100 ? [100, 0] : [this.value, 100 - this.value];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.valueFontSize = Math.max(Math.floor(this.size * 0.4), 10);
    this.labelFontSize = Math.min(
      Math.max(Math.floor(this.valueFontSize * 0.3), 2),
      30
    );
    this.trendFontSize = Math.max(Math.floor(this.valueFontSize * 0.35), 1.8);
    this.chartColors[0].backgroundColor[0] = this.color;
  }
}
