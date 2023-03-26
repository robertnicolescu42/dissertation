import { Type, Transform } from 'class-transformer';

const AlertSeverities = [
  'INFO', 'WARNING', 'ERROR', 'UNKNOWN'
] as const;

export type AlertSeverity = typeof AlertSeverities[number];

const AlertStatuses = [
  'OPEN', 'AUTOINWORK', 'DONE'
] as const;
export type AlertStatus = typeof AlertStatuses[number];

const AlertResolutions = [
  'NONE', 'WONTFIX', 'SOLVED', 'AUTOCLOSED'
] as const;

export type AlertResolution = typeof AlertResolutions[number];


export class Alert {
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsCreatedUtc: Date;
  functionalGroup: string;
  code: string;
  message: string;
  stationId: string;
  severity: AlertSeverity; 
  alertCount: number;
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsDoneUtc: Date;
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsLastOccurrenceUtc: Date;
}

export interface AlertGroupUpdate {
  comment?: string;
  resolution?: AlertResolution;
  status?: AlertStatus;
}

export class AlertGroup {
  alertGroupId: string;
  plantIndex: string;
  plantArea: string;
  alertCount: number;
  stationId: string;
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsOpenUtc: Date;
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsLastAlertUtc: Date;
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsAutoInWorkUtc: Date;
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  tsDoneUtc: Date;
  status: AlertStatus;
  severity: AlertSeverity;
  code: string;
  message: string;
  functionalGroup: string;
}

export class AlertGroupWithDuration extends AlertGroup
{
  duration: number;
}

export function sortBySeverityAndStatus(a: AlertGroup, b: AlertGroup): number {

  const severityOrder: AlertSeverity[] = [
    'ERROR',
    'WARNING',
    'INFO',
    'UNKNOWN'
  ];

  if (a.severity === b.severity) {
    return sortByStatusAndDate(a, b);
  } else {
    return severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity);
  }
}

export function sortByStatusAndDate(a: AlertGroup, b: AlertGroup): number {

  const statusOrder: AlertStatus[] = [
    'OPEN',
    'AUTOINWORK',
    'DONE',
  ];

  if (a.status === b.status) {
    return new Date(b.tsOpenUtc).getTime() - new Date(a.tsOpenUtc).getTime();
  } else {
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  }
}

export interface AlertMappingEntry {
  id: string;
  sortkey: string;
  plant: string;
  category: string;
  type: string;
  lastKey?: string;

  original: {
    stationId: string;
    stationName: string;
    severity: AlertResolution;
    code: string;
    message: string;
  };

  map: {
    stations: StationsArray[];
    severity: AlertResolution;
    code: string;
    message: string;
  };
}

export interface StationsArray {
  stationId: string;
  stationName: string;
}
