import { Component, Input, OnInit } from '@angular/core';
import { OEE } from '../../../../types/oee';
import { WorkstationGeneratorService } from '../../../../secure/services/workstation-generator.service';
import { Workstation } from '../../../../types/work-station';

@Component({
  selector: 'app-oee-calculation',
  templateUrl: './oee-calculation.component.html',
  styleUrls: ['./oee-calculation.component.scss'],
})
export class OeeCalculationComponent implements OnInit {
  @Input()
  workstation: Workstation = {
    stationId: '',
    displayName: '',
    equipmentNumber: '',
    isOeeCalculable: false,
    cycleTime: 0,
    cycleTimeDelay: 0,
    description: '',
    plantIndex: '',
    runningTime: 0,
    productionCount: 0,
    defectCount: 0,
  };

  oeeCalculated?: OEE = {
    performance: 0,
    quality: 0,
    availability: 0,
    oee: 0,
  };

  constructor(
    private workstationGeneratorService: WorkstationGeneratorService
  ) {}

  ngOnInit(): void {
    if (this.workstation) {
      this.oeeCalculated = this.workstationGeneratorService.calculateOEE(
        this.workstation
      );
    }
  }
}
