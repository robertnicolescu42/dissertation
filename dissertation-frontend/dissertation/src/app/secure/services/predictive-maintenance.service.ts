import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { RulInfoDataEntry } from 'src/app/types/predictive-maintenance';
import { Workstation } from '../../types/work-station';

@Injectable({
  providedIn: 'root',
})
export class PredictiveMaintenanceService {
  workstation: Workstation;

  private _rulInfoData$!: Observable<RulInfoDataEntry[]>;
  get rulInfoData$(): Observable<RulInfoDataEntry[]> {
    return this._rulInfoData$;
  }
  constructor() {
    this.workstation = {
      stationId: '',
      displayName: '',
      equipmentNumber: '',
      isOeeCalculable: false,
      cycleTime: 0,
      cycleTimeDelay: 0,
      description: '',
      plantIndex: '',
      runningTime: 0,
      productionCount: 0,
      defectCount: 0,
    };

    this._rulInfoData$ = this.generateRulInfoData();
  }

  convertToRulInfoDataEntries(data: any[]): RulInfoDataEntry[] {
    //sort data by rulInPercent
    data.sort((a, b) => (a.rulInPercent > b.rulInPercent ? 1 : -1));

    return data.map((item) => {
      return new RulInfoDataEntry({
        toolID: item.toolID,
        rulInQuantity: item.rulInQuantity,
        cycleNumber: item.cycleNumber,
        errorRatio: item.errorRatio,
        rulInPercent: item.rulInPercent,
        numberAnomalies: item.numberAnomalies,
        timestamp: item.timestamp,
      });
    });
  }

  // generateRulInfoData() {
  //   const data: RulInfoDataEntry[] = [];

  //   for (let i = 0; i < 100; i++) {
  //     const toolID = `Tool asdf`;
  //     const rulInQuantity = Math.floor(Math.random() * 100) + 1;
  //     const cycleNumber = Math.floor(Math.random() * 100) + 1;
  //     const errorRatio = Math.floor(Math.random() * 100) + 1;
  //     const rulInPercent = Math.floor(Math.random() * 100) + 1;
  //     const numberAnomalies = Math.floor(Math.random() * 100) + 1;
  //     const timestamp = new Date().toISOString();

  //     const entry: RulInfoDataEntry = {
  //       data: {
  //         toolID,
  //         rulInQuantity,
  //         cycleNumber,
  //         errorRatio,
  //         rulInPercent,
  //         numberAnomalies,
  //         timestamp,
  //       },
  //     };

  //     data.push(entry);
  //   }

  //   return of(data);
  // }

  generateRulInfoData() {
    const data: RulInfoDataEntry[] = [];

    const startTimestamp = Date.parse(new Date().toISOString());
    const rulInPercentBase = 14.6377;

    for (let i = 0; i < 100; i++) {
      const toolID = 'TOOLID';
      const cycleNumber = 316563 + i * 100;
      const rulInQuantity = Math.round(cycleNumber * (rulInPercentBase / 100));
      const rulInPercent = rulInPercentBase - i * 0.0045;

      const rand = Math.random();
      const errorRatio = rand > 0.9 ? parseFloat(rand.toFixed(2)) : 0.0;
      const numberAnomalies = 100;
      const timestamp = new Date(startTimestamp + i * 3600000).toISOString();

      const entry: RulInfoDataEntry = {
        data: {
          toolID,
          rulInQuantity,
          cycleNumber,
          errorRatio,
          rulInPercent,
          numberAnomalies,
          timestamp,
        },
      };

      data.push(entry);
    }

    return of(data);
  }
}
