import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Workstation } from '../../../app/types/work-station';
import { WorkstationGeneratorService } from '../services/workstation-generator.service';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent implements OnInit, OnDestroy {
  @Input()
  workstation?: Workstation;

  city?: { abbreviation: string; name: string; country: string };
  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private workstationGeneratorService: WorkstationGeneratorService
  ) {}

  ngOnInit(): void {
    if (this.workstation) {
      console.log(this.workstation);
      this.city = this.workstationGeneratorService.getCityByAbbreviation(
        this.workstation.plantIndex
      );
    } else {
      console.log(typeof this.workstation);
    }
  }
  onClose() {
    this.bsModalRef.hide();
  }

  getCityDetails() {
    if (this.workstation) {
      return this.workstationGeneratorService.getCityByAbbreviation(
        this.workstation.plantIndex
      );
    }
    return '';
  }

  ngOnDestroy(): void {}
}
