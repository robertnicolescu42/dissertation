import { Component, OnInit, Input } from '@angular/core';
import { Workstation } from '../../../types/work-station';
import { Observable } from 'rxjs';
// import { View } from "../../../types/view";
import { Tool } from '../../../types/predictive-maintenance';
import { ActivatedRoute, Router } from '@angular/router';
import { PredictiveMaintenanceService } from '../../services/predictive-maintenance.service';

@Component({
  selector: 'app-predictive-maintenance',
  templateUrl: './predictive-maintenance.component.html',
  styleUrls: ['./predictive-maintenance.component.scss'],
})
export class PredictiveMaintenanceComponent implements OnInit {
  removeInitialChoice: boolean | undefined;

  tabs = [
    { id: 'machine-overview', name: 'Machine Overview' },
    { id: 'anomaly-overview', name: 'Anomaly Overview' },
  ];

  activeTab = this.tabs[0].id;
  @Input()
  workstation?: Workstation;

  // get tools$(): Observable<Tool[]> {
  //   return this.stationViewPredictiveMaintenanceService.tools$;
  // }

  // get isToolslistLoading$(): Observable<boolean> {
  //   return this.stationViewPredictiveMaintenanceService.isToolslistLoading$;
  // }

  // get subViews$(): Observable<View[]> {
  //   return this.stationViewPredictiveMaintenanceService.subViews$;
  // }

  // get currentSubView$(): Observable<View> {
  //   return this.stationViewPredictiveMaintenanceService.currentSubView$;
  // }

  // get selectedToolId$(): Observable<string> {
  //   return this.stationViewPredictiveMaintenanceService.selectedToolId$;
  // }

  isAutoscale = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private stationViewPredictiveMaintenanceService: PredictiveMaintenanceService
  ) {}

  ngOnInit() {
    if (this.workstation) {
      this.stationViewPredictiveMaintenanceService.workstation =
        this.workstation;
    }

    this.removeInitialChoice = false;

    this._route.queryParams
      .subscribe((params) => {
        if (params['toolID']) {
          this.removeInitialChoice = true;
        }
      })
      .unsubscribe();
  }

  onToolSelected(event: { target: { value: any } }) {
    this.removeInitialChoice = true;
    const toolID = event.target.value;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        toolID: toolID,
      },
      queryParamsHandling: 'merge',
    });
  }
}
