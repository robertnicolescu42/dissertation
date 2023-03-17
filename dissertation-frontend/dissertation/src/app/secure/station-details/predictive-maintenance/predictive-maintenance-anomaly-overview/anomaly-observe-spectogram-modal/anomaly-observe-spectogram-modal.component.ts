import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AnomalyEntry } from '../../../../../types/predictive-maintenance';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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

  //Template Arrow icons
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    // this.anomaly
    console.log("🚀 ~ file: anomaly-observe-spectogram-modal.component.ts:27 ~ AnomalyObserveSpectogramModalComponent ~ ngOnInit ~ this.anomaly:", this.anomaly)
  }

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
