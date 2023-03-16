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

  plantId: string;
  stationId: string;
  constructor(private route: ActivatedRoute) {
    this.plantId = this.route.snapshot.paramMap.get('id') ?? '';
    this.stationId = this.route.snapshot.paramMap.get('stationId') ?? '';
  }
}
