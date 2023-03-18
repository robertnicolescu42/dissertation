import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Workstation } from '../../../app/types/work-station';
import { WorkstationGeneratorService } from '../services/workstation-generator.service';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent implements OnInit, OnDestroy {
  activeTab = 'station-details';
  @Input()
  workstation?: Workstation;

  feedbacksData?: {
    okFeedbacks: {
      title: string;
      total: number;
      lastResult: boolean;
      lastId: string;
      lastTime: Date;
      rate: number;
    };
    nokFeedbacks: {
      title: string;
      total: number;
      lastResult: boolean;
      lastId: string;
      lastTime: Date;
      rate: number;
    };
    scrapFeedbacks: {
      title: string;
      total: number;
      lastResult: boolean;
      lastId: string;
      lastTime: Date;
      rate: number;
    };
    completeFeedbacks: {
      total: number;
      lastResult: any;
      lastId: any;
      lastTime: any;
    };
  };

  city?: { abbreviation: string; name: string; country: string };
  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private workstationGeneratorService: WorkstationGeneratorService,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.workstation = history.state.workstation;
    if (this.workstation) {
      this.city = this.workstationGeneratorService.getCityByAbbreviation(
        this.workstation.plantIndex
      );

      this.feedbacksData =
        this.workstationGeneratorService.generateFeedbackData();
    } else {
    }

    this.route.queryParams.subscribe((params) => {
      this.activeTab = params['view'] || 'station-details';
    });
  }
  onClose() {
    // this.bsModalRef.hide();
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onTabClick(tabName: string) {
    this.activeTab = tabName;
    const queryParams = { view: tabName };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  getCityDetails() {
    if (this.workstation) {
      return this.workstationGeneratorService.getCityByAbbreviation(
        this.workstation.plantIndex
      );
    }
    return '';
  }

  navigateToPreviousPage() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {}
}
