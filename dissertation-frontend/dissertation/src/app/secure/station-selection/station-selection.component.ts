import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Workstation } from '../../types/work-station';
import { WorkstationGeneratorService } from '../services/workstation-generator.service';
import { StationDetailsComponent } from '../station-details/station-details.component';

@Component({
  selector: 'app-station-selection',
  templateUrl: './station-selection.component.html',
  styleUrls: ['./station-selection.component.scss'],
})
export class StationSelectionComponent implements OnInit, OnDestroy {
  workstations: Workstation[] = [];
  filteredWorkstations: Workstation[] = [];
  greaterThanRunningTime: number = 0;
  smallerThanRunningTime: number = 0;
  modalRef: BsModalRef | undefined;

  constructor(
    private workstationGeneratorService: WorkstationGeneratorService,
    private modalService: BsModalService
  ) {}
  ngOnInit(): void {
    this.workstations =
      this.workstationGeneratorService.generateWorkstations(100);

    this.filteredWorkstations = this.workstations;
  }

  logIt(val: any) {
    console.log(val);
  }

  filterByRunningTime() {
    let filteredWorkstations: Workstation[] = this.workstations;

    // check if biggerThan is actually smaller than lessThan, and if
    // lessThan is bigger than biggerThan. Only then, return something
    if (
      this.greaterThanRunningTime &&
      this.smallerThanRunningTime &&
      this.greaterThanRunningTime < this.smallerThanRunningTime
    ) {
      filteredWorkstations = this.workstations.filter(
        (workstation) =>
          workstation.runningTime >= this.greaterThanRunningTime &&
          workstation.runningTime <= this.smallerThanRunningTime
      );
    } else if (this.greaterThanRunningTime) {
      filteredWorkstations = this.workstations.filter(
        (workstation) => workstation.runningTime >= this.greaterThanRunningTime
      );
    } else if (this.smallerThanRunningTime) {
      filteredWorkstations = this.workstations.filter(
        (workstation) => workstation.runningTime <= this.smallerThanRunningTime
      );
    }
    if (filteredWorkstations) {
      this.filteredWorkstations = filteredWorkstations;
    }
  }

  resetRunningTimeFilter() {
    this.greaterThanRunningTime = 0;
    this.smallerThanRunningTime = 0;
    this.filteredWorkstations = this.workstations;
  }

  showStationDetails(workstation: Workstation) {
    console.log(workstation);
    this.modalRef = this.modalService.show(StationDetailsComponent, {
      ignoreBackdropClick: true,
    });
    this.modalRef.setClass('modal-lg');
    // open the StationDetailsComponent modal, while passing workstation as an input value
  }
  ngOnDestroy(): void {}
}
