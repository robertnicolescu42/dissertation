export interface RulInfoRawDataEntry {
  ts?: Date;
  norm: {
    rulInPercent: number;
    rulInQuantity: number;
    result: string;
    anomalies: number;
    errorRatio: number;
  };
}

export class RulInfoDataEntry {
  constructor(
    // public timestamp: string,
    public data: {
      toolID: number;
      rulInQuantity: number;
      cycleNumber: number; // a singular shot
      errorRatio: number;
      rulInPercent: number;
      numberAnomalies: number;
      timestamp: Date;
    }
  ) {}
}

export interface Tool {
  toolID: string;
}

export interface AnomalyEntry {
  errorMessage: string;
  errorCode: string;
  ts: string;
  counter: string;
  partID: string;
  anomalyFileByteStream?: string;
  normalFileByteStream?: string;
}

export interface RulInfoGraphEntry {
  toolID: number;
  rulInQuantity: number;
  cycleNumber: number; // a singular shot
  errorRatio: number;
  rulInPercent: number;
  numberAnomalies: number;
  timestamp: Date;
}
