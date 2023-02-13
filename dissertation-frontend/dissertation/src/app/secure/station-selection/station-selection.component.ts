import { Component, OnDestroy, OnInit } from '@angular/core';
import { Workstation } from '../../types/work-station';
import { WorkstationGeneratorService } from '../services/workstation-generator.service';

@Component({
  selector: 'app-station-selection',
  templateUrl: './station-selection.component.html',
  styleUrls: ['./station-selection.component.scss'],
})
export class StationSelectionComponent implements OnInit, OnDestroy {
  workstations: Workstation[] = [];

  constructor(
    private workstationGeneratorService: WorkstationGeneratorService
  ) {}
  ngOnInit(): void {
    this.workstations = this.workstationGeneratorService.generateWorkstations(
      100
    );
  }
  ngOnDestroy(): void {}
}
