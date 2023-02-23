import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { Workstation } from 'src/app/types/work-station';
import { Workstation } from '../../../app/types/work-station';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent implements OnInit, OnDestroy {
  @Input()
  workstation: Workstation | undefined;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {}

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnDestroy(): void {}
  ngOnInit(): void {}
}
