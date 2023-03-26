import { Component } from '@angular/core';
import { WorkstationsService } from '../../services/workstations.service';

@Component({
  selector: 'app-workstation-config',
  templateUrl: './workstation-config.component.html',
  styleUrls: ['./workstation-config.component.scss'],
})
export class WorkstationConfigComponent {
  constructor(private workstationService: WorkstationsService) {}

  workstation = {
    plantIndex: '',
    stationId: '',
    displayName: '',
    description: '',
    cycleTime: 0,
    runningTime: 0,
    productionCount: 0,
    defectCount: 0,
    isOeeCalculable: false,
    equipmentNumber: '',
    cycleTimeDelay: 0,
  };

  onSubmit(): void {
    // this.myService.addWorkstation(this.workstation);
    console.log(this.workstation);
    if (this.workstation) {
      this.workstationService.addWorkstation(this.workstation);
    }
  }
}
