import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AnomalyEntry } from '../../../../../types/predictive-maintenance';

@Component({
  selector: 'app-anomaly-observe-spectogram-modal',
  templateUrl: './anomaly-observe-spectogram-modal.component.html',
  styleUrls: ['./anomaly-observe-spectogram-modal.component.scss'],
})
export class AnomalyObserveSpectogramModalComponent implements OnInit {
  anomaly: any = {
    anomalyFileByteStream: '',
    normalFileByteStream: '',
  };

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
