import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Workstation } from '../../types/work-station';
import { WorkstationGeneratorService } from '../services/workstation-generator.service';
import { WorkstationsService } from '../services/workstations.service';
import { StationDetailsComponent } from '../station-details/station-details.component';

@Component({
  selector: 'app-station-selection',
  templateUrl: './station-selection.component.html',
  styleUrls: ['./station-selection.component.scss'],
})
export class StationSelectionComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  workstations: Workstation[] = [];
  filteredWorkstations: Workstation[] = [];
  greaterThanRunningTime: number = 0;
  smallerThanRunningTime: number = 0;
  modalRef: BsModalRef | undefined;

  constructor(
    private workstationGeneratorService: WorkstationGeneratorService,
    private workstationService: WorkstationsService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let mockData = true;

    if (mockData) {
      this.route.paramMap.subscribe((params) => {
        const plantId = params.get('id');
        console.log(
          '🚀 ~ file: station-selection.component.ts:33 ~ StationSelectionComponent ~ ngOnInit ~ plantId:',
          plantId
        );
        this.workstations =
          this.workstationGeneratorService.generateWorkstations(
            100,
            plantId ? plantId : ''
          );
        this.filteredWorkstations = this.workstations;
        // Do something with the plantId
      });
    } else {
      this.workstationService.getWorkstations().subscribe((workstations) => {
        this.workstations = workstations;
        this.filteredWorkstations = this.workstations;
      });
    }
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
    // const initialState = {
    //   workstation: workstation,
    // };
    // this.modalRef = this.modalService.show(StationDetailsComponent, {
    //   ignoreBackdropClick: true,
    //   initialState,
    // });
    // this.modalRef.setClass('modal-fullscreen modal-dialog-centered');
    const currentUrl = this.router.url;
    const plantId = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
    this.router.navigate(
      [`/plant-selection/${plantId}/station-details/${workstation.stationId}`],
      {
        state: { workstation: workstation },
      }
    );
  }
  ngOnDestroy(): void {}
}
