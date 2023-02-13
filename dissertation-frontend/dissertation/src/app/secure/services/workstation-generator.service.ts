import { Injectable } from '@angular/core';
import { Workstation } from '../../types/work-station';

@Injectable({
  providedIn: 'root',
})
export class WorkstationGeneratorService {
  constructor() {}

  generateWorkstation(): Workstation {
    return {
      stationId: Math.random().toString(36).substring(2, 15),
      displayName: `Workstation ${Math.floor(Math.random() * 100)}`,
      isConsiderScrapForOee: Math.random() >= 0.5,
      equipmentNumber: Math.random().toString(36).substring(2, 15),
      isOeeCalculable: Math.random() >= 0.5,
      isSendingQualityRate: Math.random() >= 0.5,
      cycleTime: Math.floor(Math.random() * 1000),
      cycleTimeDelay: Math.floor(Math.random() * 1000),
      description: Math.random().toString(36).substring(2, 15),
      plantIndex: Math.random().toString(36).substring(2, 15),
      isStatusSynthetical: Math.random() >= 0.5,
      isUsingQmetric: Math.random() >= 0.5,
      isPredictiveMaintenanceDisplayed: Math.random() >= 0.5,
      isStationMonitorDisplayed: Math.random() >= 0.5,
      isProcessTimesDisplayed: Math.random() >= 0.5,
      isShowStatusOnly: Math.random() >= 0.5,
      stationMonitorYellow: Math.floor(Math.random() * 1000),
      stationMonitorRed: Math.floor(Math.random() * 1000),
      runningTime: Math.floor(Math.random() * 1000),
    };
  }

  generateWorkstations(number: number): Workstation[] {
    const workstations: Workstation[] = [];
    for (let i = 0; i < number; i++) {
      workstations.push(this.generateWorkstation());
    }
    return workstations;
  }
}
