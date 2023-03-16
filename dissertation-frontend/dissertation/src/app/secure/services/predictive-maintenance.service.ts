import { Injectable } from '@angular/core';
import { Workstation } from '../../types/work-station';

@Injectable({
  providedIn: 'root',
})
export class PredictiveMaintenanceService {
  workstation: Workstation;

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
  }

  generateRulInfoData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      const toolID = `Tool asdf`;
      const rulInQuantity = Math.floor(Math.random() * 100) + 1;
      const cycleNumber = Math.floor(Math.random() * 100) + 1;
      const errorRatio = Math.floor(Math.random() * 100) + 1;
      const rulInPercent = Math.floor(Math.random() * 100) + 1;
      const numberAnomalies = Math.floor(Math.random() * 100) + 1;
      const timestamp = new Date().toISOString();

      data.push({
        toolID,
        rulInQuantity,
        cycleNumber,
        errorRatio,
        rulInPercent,
        numberAnomalies,
        timestamp,
      });
    }

    return data;
  }
}
