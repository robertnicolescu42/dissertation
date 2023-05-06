import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  BehaviorSubject,
  Observable,
  of,
  shareReplay,
  Subscription,
  take,
} from 'rxjs';
import { PredictiveMaintenanceService } from 'src/app/secure/services/predictive-maintenance.service';
import { AnomalyEntry } from '../../../../types/predictive-maintenance';
import { Workstation } from '../../../../types/work-station';
import { AnomalyObserveSpectogramModalComponent } from './anomaly-observe-spectogram-modal/anomaly-observe-spectogram-modal.component';

@Component({
  selector: 'app-predictive-maintenance-anomaly-overview',
  templateUrl: './predictive-maintenance-anomaly-overview.component.html',
  styleUrls: ['./predictive-maintenance-anomaly-overview.component.scss'],
})
export class PredictiveMaintenanceAnomalyOverviewComponent
  implements OnInit, OnDestroy
{
  bsModalRef!: BsModalRef;
  subscriptions: Subscription = new Subscription();
  // anomalyData: AnomalyEntry[] | undefined;

  private _isAnomalyDataLoading$: BehaviorSubject<boolean>;

  get isAnomalyDataLoading$(): Observable<boolean> {
    return this._isAnomalyDataLoading$.asObservable();
  }

  get anomalyData$(): Observable<AnomalyEntry[]> {
    return this.predictiveMaintenanceViewAnomalyOverviewService.generateAnomalyOverview();
  }

  @Input()
  set workstation(value: Workstation) {
    if (value) {
      this.predictiveMaintenanceViewAnomalyOverviewService.workstation = value;
    }
  }

  get workstation$(): Observable<Workstation> {
    return of(this.predictiveMaintenanceViewAnomalyOverviewService.workstation);
  }

  isAutoscale = true;

  constructor(
    private predictiveMaintenanceViewAnomalyOverviewService: PredictiveMaintenanceService,
    private modalService: BsModalService
  ) {
    this._isAnomalyDataLoading$ = new BehaviorSubject(false);
  }

  ngOnInit(): void {
    // this.anomalyData$.subscribe((data) => {
    //   this.anomalyData = data;
    // });
  }

  openObserveSpectogramDialog(anomaly: AnomalyEntry) {
    this.subscriptions.add(
      this.predictiveMaintenanceViewAnomalyOverviewService
        .getAnomalySpectograms(anomaly.ts)
        .pipe(take(1), shareReplay(1))
        .subscribe(
          (res: {
            anomalyFileByteStream: string | undefined;
            normalFileByteStream: string | undefined;
          }) => {
            anomaly.anomalyFileByteStream = res.anomalyFileByteStream;
            anomaly.normalFileByteStream = res.normalFileByteStream;
            this.bsModalRef = this.modalService.show(
              AnomalyObserveSpectogramModalComponent,
              {
                class: 'modal-dialog-Center modal-dialog modal-xl',
                initialState: { anomaly },
              }
            );
            this.bsModalRef.content.closeBtnName = 'Close';
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
