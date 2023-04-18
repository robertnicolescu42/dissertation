import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkstationsService } from '../../services/workstations.service';
import { FormControl } from '@angular/forms';
import { Workstation } from '../../../types/work-station';

@Component({
  selector: 'app-workstation-config',
  templateUrl: './workstation-config.component.html',
  styleUrls: ['./workstation-config.component.scss'],
})
export class WorkstationConfigComponent {
  originalWorkstation: Workstation;

  constructor(private workstationService: WorkstationsService) {
    this.originalWorkstation = JSON.parse(JSON.stringify(this.workstation));
  }

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

  @Output() workstationAdded = new EventEmitter<Workstation>();
  @Output() workstationUpdated = new EventEmitter<Workstation>();
  @Output() workstationDeleted = new EventEmitter<Workstation>();

  onSubmit(): void {
    console.log(this.workstation);
    if (this.workstation) {
      this.workstationService
        .addWorkstation(this.workstation)
        .subscribe((res) => console.log(res));
    }

    this.workstationAdded.emit(this.workstation);
  }

  updateWorkstation(): void {
    if (this.workstation) {
      this.workstationService
        .updateWorkstation(this.workstation)
        .subscribe((res: any) => console.log(res));
    }
    this.workstationUpdated.emit(this.workstation);
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
    this.workstationDeleted.emit(this.workstation);
  }

  resetForm(): void {
    this.workstation = JSON.parse(JSON.stringify(this.originalWorkstation));
  }
}
