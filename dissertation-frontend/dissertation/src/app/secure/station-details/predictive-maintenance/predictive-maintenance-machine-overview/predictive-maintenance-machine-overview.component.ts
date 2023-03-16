import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PredictiveMaintenanceService } from '../../../services/predictive-maintenance.service';
import { RulInfoDataEntry } from '../../../../types/predictive-maintenance';
import { Workstation } from '../../../../../app/types/work-station';

@Component({
  selector: 'app-predictive-maintenance-machine-overview',
  templateUrl: './predictive-maintenance-machine-overview.component.html',
  styleUrls: ['./predictive-maintenance-machine-overview.component.scss'],
})
export class PredictiveMaintenanceMachineOverviewComponent
  implements OnDestroy
{
  @Input()
  workstation?: Workstation;

  private subscriptions: Subscription = new Subscription();
  statisticsData?: { errorRatio: number; numberAnomalies: number };

  isHealthScoreChart = true;

  calculatedStatistics = {
    rulPercentage: 70,
    rulShots: 0,
    numAnomalies: 0,
    errorRatio: 0.0,
    timestamp: new Date(),
  };

  public rulInfoData?: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    lineChartLabels: string[];
    lineChartData: any[];
    lineChartColors: any[];
    rulInQuantityData?: any[];
    rulInQuantityDataLabels?: string[];
    rulInQuantityDataColours?: any[];
  };

  get rulInfoData$(): Observable<RulInfoDataEntry[]> {
    return this.predictiveMaintenanceViewMachineOverviewService.rulInfoData$;
  }

  plantId: string;
  stationId: string;
  constructor(
    private route: ActivatedRoute,
    private predictiveMaintenanceViewMachineOverviewService: PredictiveMaintenanceService
  ) {
    this.plantId = this.route.snapshot.paramMap.get('id') ?? '';
    this.stationId = this.route.snapshot.paramMap.get('stationId') ?? '';

    this.subscriptions.add(
      this.rulInfoData$.subscribe((data) => {
        this.rulInfoData = this.processData(data);
        this.statisticsData = this.calculateStatistics(data);
      })
    );
  }
  calculateStatistics(data: RulInfoDataEntry[]) {
    let errorRatioSum = 0;
    let sumOfAnomalies = 0;
    if (data.length > 0) {
      sumOfAnomalies = 0;
      data.forEach((entry) => {
        sumOfAnomalies += entry.data.numberAnomalies;
        errorRatioSum += entry.data.errorRatio;
      });
    }

    return {
      errorRatio: data.length > 0 ? errorRatioSum / data.length : 0,
      numberAnomalies: sumOfAnomalies,
    };
  }

  findMinAndMaxRulInfo(rulInfoData: RulInfoDataEntry[]) {
    let sortedByRulInPercent = rulInfoData.sort(
      (a, b) => a.data.rulInPercent - b.data.rulInPercent
    );
    return {
      yMin: sortedByRulInPercent[0].data.rulInPercent,
      yMax: sortedByRulInPercent[sortedByRulInPercent.length - 1].data
        .rulInPercent,
    };
  }

  processData(rulInfoData: RulInfoDataEntry[]) {
    // the "trend" line is being built by adding two points
    // to the normal "shots" array. Since the shots are pretty
    // close to each other, the distance between the last two
    // points will be long enough to properly display a long line
    // between them
    let chartObj: {
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      lineChartLabels: string[];
      lineChartData: any;
      lineChartColors: any;
      rulInQuantityData?: any[];
      rulInQuantityDataLabels: string[];
      rulInQuantityDataColours: any[];
    } = {
      xMin: 0,
      xMax: 100,
      yMin: 0,
      yMax: 100,
      lineChartLabels: [],
      lineChartData: [],
      lineChartColors: [],
      rulInQuantityData: [],
      rulInQuantityDataLabels: [],
      rulInQuantityDataColours: [],
    };

    if (rulInfoData.length > 0 && rulInfoData[rulInfoData.length - 1].data) {
      chartObj.xMin = rulInfoData[rulInfoData.length - 1].data.cycleNumber;
      chartObj.xMax = rulInfoData[0].data.cycleNumber;

      let sortedByRulInPercent: {
        yMin: number;
        yMax: number;
      } = this.findMinAndMaxRulInfo(rulInfoData);

      chartObj.yMin = sortedByRulInPercent.yMin;
      chartObj.yMax = sortedByRulInPercent.yMax;

      let shotsData: {
        data: number[];
        label: string;
      } = {
        data: [],
        label: 'RulInfo',
      };

      let rulInQuantityData: {
        data: number[];
        label: string;
      } = {
        data: [],
        label: 'RUL In Quantity',
      };

      rulInfoData.forEach((rulInfo) => {
        chartObj.lineChartLabels.push(rulInfo.data.cycleNumber.toString());
        shotsData.data.push(rulInfo.data.rulInPercent);

        rulInQuantityData.data.push(rulInfo.data.rulInQuantity);
      });

      // first "Shots" line
      shotsData.data = shotsData.data.reverse().concat(0);
      rulInQuantityData.data = rulInQuantityData.data.reverse();
      chartObj.lineChartLabels = chartObj.lineChartLabels.reverse();

      let trendDataTotal =
        rulInfoData[0].data.cycleNumber + rulInfoData[0].data.rulInQuantity;

      chartObj.lineChartLabels.push(trendDataTotal.toString());
      shotsData.data.map((shotData, index) => {
        chartObj.lineChartData.push({
          x: parseFloat(chartObj.lineChartLabels[index]),
          y: shotData.toFixed(2),
        });
      });

      rulInQuantityData.data.map((rulInQuantity, index) => {
        chartObj.rulInQuantityData?.push({
          x: parseFloat(chartObj.lineChartLabels[index]),
          y: rulInQuantity.toFixed(2),
        });

        chartObj.rulInQuantityDataLabels.push(chartObj.lineChartLabels[index]);
      });

      chartObj.lineChartData = [
        {
          data: chartObj.lineChartData,
          label: shotsData.label,
        },
      ];

      chartObj.rulInQuantityData = [
        {
          data: chartObj.rulInQuantityData,
          label: rulInQuantityData.label,
        },
      ];

      chartObj.rulInQuantityDataColours = [
        {
          borderColor: [],
          pointBackgroundColor: [],
          pointBorderColor: [],
        },
      ];

      chartObj.rulInQuantityData[0].data.forEach(() => {
        chartObj.rulInQuantityDataColours[0].borderColor.push(
          'rgba(255, 0, 0, 1)'
        );
        chartObj.rulInQuantityDataColours[0].pointBackgroundColor.push(
          'rgba(255, 0, 0, 1)'
        );
        chartObj.rulInQuantityDataColours[0].pointBorderColor.push(
          'rgba(255, 0, 0, 1)'
        );
      });

      return this.prepareDataForChart(chartObj);
    } else return;
  }

  prepareDataForChart(chartObj: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    lineChartLabels: string[];
    lineChartData: any;
    lineChartColors: any;
  }) {
    let lineChartLabels = chartObj.lineChartLabels;
    let lineChartData = chartObj.lineChartData;
    let lineChartColors = chartObj.lineChartColors;

    lineChartLabels = lineChartLabels.sort((a, b) => Number(a) - Number(b));
    let coloursArray = [];
    for (let i = 0; i <= lineChartLabels.length - 3; i++) {
      coloursArray.push('rgba(255, 0, 0, 1)');
    }

    // set the initial last 2 points of the array to have a different color
    coloursArray.push('rgba(15, 10, 222, 1)');
    coloursArray.push('rgba(15, 10, 222, 1)');

    // generate n points between the last two points of this.lineChartData.data, having a descending y value and an ascending x value.
    // the last point y value should be 0 and the last x value should be lastPoint.x
    // Before starting adding the points, we remove the last point from lineChartData.data (which was 0), and we add it again at the end.
    let lastPoint = <
      {
        x: number;
        y: number;
      }
    >lineChartData[0].data[lineChartData[0].data.length - 1];

    let secondLastPoint = <
      {
        x: number;
        y: number;
      }
    >lineChartData[0].data[lineChartData[0].data.length - 2];

    lineChartData[0].data.pop();
    lineChartLabels.pop();

    let n = 500;
    let xStep = (lastPoint.x - secondLastPoint.x) / n;
    let yStep = (lastPoint.y - secondLastPoint.y) / n;

    for (let i = 0; i < n; i++) {
      let newPoint = {
        x: (secondLastPoint.x + xStep * (i + 1)).toFixed(0),
        y: (secondLastPoint.y - Math.abs(yStep) * (i + 1)).toFixed(2),
      };

      lineChartLabels.push(newPoint.x.toString());
      lineChartData[0].data.push(newPoint as any);
      coloursArray.push('rgb(0,0,255)');
    }

    lineChartData[0].data.push({
      x: lastPoint.x,
      y: 0,
    } as any);
    lineChartColors = [
      {
        pointBackgroundColor: coloursArray,
        pointBorderColor: coloursArray,
        borderColor: coloursArray,
      },
    ];

    if (lineChartData[0].data.length != lineChartLabels.length) {
      if (lineChartData[0].data.length > lineChartLabels.length) {
        lineChartData[0].data.pop();
      } else {
        lineChartLabels.pop();
      }
    }

    // sort the points by cycleTime
    lineChartData[0].data = lineChartData[0].data.sort(
      (a: { x: number }, b: { x: number }) => a.x - b.x
    );

    chartObj.lineChartColors = lineChartColors;
    chartObj.lineChartData = lineChartData;
    chartObj.lineChartLabels = lineChartLabels;

    return chartObj;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
