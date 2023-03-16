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

    // this._rulInfoData$ = this.generateRulInfoData();
    this._rulInfoData$ = of(
      this.convertToRulInfoDataEntries(
        []
      ));
  }

  convertToRulInfoDataEntries(data: any[]): RulInfoDataEntry[] {
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

  generateRulInfoData() {
    const data: RulInfoDataEntry[] = [];

    for (let i = 0; i < 100; i++) {
      const toolID = `Tool asdf`;
      const rulInQuantity = Math.floor(Math.random() * 100) + 1;
      const cycleNumber = Math.floor(Math.random() * 100) + 1;
      const errorRatio = Math.floor(Math.random() * 100) + 1;
      const rulInPercent = Math.floor(Math.random() * 100) + 1;
      const numberAnomalies = Math.floor(Math.random() * 100) + 1;
      const timestamp = new Date().toISOString();

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
