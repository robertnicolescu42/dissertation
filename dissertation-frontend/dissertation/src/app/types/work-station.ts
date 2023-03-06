export interface Workstation {
  stationId: string;
  displayName: string;
  equipmentNumber: string;
  isOeeCalculable: boolean;
  cycleTime: number;
  cycleTimeDelay: number;
  description: string;
  plantIndex: string;
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
