import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workstation } from '../../../../../app/types/work-station';

@Component({
  selector: 'app-predictive-maintenance-machine-overview',
  templateUrl: './predictive-maintenance-machine-overview.component.html',
  styleUrls: ['./predictive-maintenance-machine-overview.component.scss'],
})
export class PredictiveMaintenanceMachineOverviewComponent {
  @Input()
  workstation?: Workstation;

  isHealthScoreChart = true;

  calculatedStatistics = {
    rulPercentage: 70,
    rulShots: 0,
    numAnomalies: 0,
    errorRatio: 0.0,
    timestamp: new Date(),
  };

  plantId: string;
  stationId: string;
  constructor(private route: ActivatedRoute) {
    this.plantId = this.route.snapshot.paramMap.get('id') ?? '';
    this.stationId = this.route.snapshot.paramMap.get('stationId') ?? '';
  }
}
