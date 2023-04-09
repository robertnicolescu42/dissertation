import { Component, Input } from '@angular/core';
import { WorkstationsService } from '../../services/workstations.service';

@Component({
  selector: 'app-workstation-config',
  templateUrl: './workstation-config.component.html',
  styleUrls: ['./workstation-config.component.scss'],
})
export class WorkstationConfigComponent {
  constructor(private workstationService: WorkstationsService) {}

  @Input()
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

  @Input()
  isNewWorkstation: boolean = false;

  onSubmit(): void {
    // this.myService.addWorkstation(this.workstation);
    console.log(this.workstation);
    if (this.workstation) {
      this.workstationService
        .addWorkstation(this.workstation)
        .subscribe((res) => console.log(res));
    }
  }

  deleteWorkstation() {
    if (this.workstation) {
      this.workstationService
        .deleteWorkstation(
          this.workstation.plantIndex,
          this.workstation.stationId
        )
        .subscribe((res: any) => console.log(res));
    }
  }
}
