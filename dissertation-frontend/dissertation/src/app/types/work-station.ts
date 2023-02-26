export interface Workstation {

  stationId: string;
  displayName: string;
  isConsiderScrapForOee: boolean;
  equipmentNumber: string;
  isOeeCalculable: boolean;
  isSendingQualityRate: boolean;
  cycleTime: number;
  cycleTimeDelay: number;
  description: string;
  plantIndex: string;
  isStatusSynthetical: boolean;
  isUsingQmetric: boolean;
  isPredictiveMaintenanceDisplayed: boolean;
  isStationMonitorDisplayed: boolean;
  isProcessTimesDisplayed: boolean;
  isShowStatusOnly: boolean;
  stationMonitorYellow: number;
  stationMonitorRed: number;
  runningTime: number;
  productionCount: number;
  defectCount: number;

  // productionArea: {
  //   plantIndex: string;
  //   productionAreaIndex: string;
  //   plantAreaIndex: string;
  // }

  // getUniqueId(): string {
  //   return 'Workstation_' + this.stationId;
  // }

  // getId(): string {
  //   return this.stationId;
  // }

  // getText(): string {
  //   return this.displayName;
  // }

  // getURL(): string {
  //   return `/securehome/plant/${this.plantIndex}/floor/${this.productionArea.plantAreaIndex}/station/${this.stationId}`;
  // }
}
