import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationSelectionComponent } from './secure/station-selection/station-selection.component';
import { NavbarComponent } from './secure/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigComponent } from './secure/config/config.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { StationDetailsComponent } from './secure/station-details/station-details.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { OeeCalculationComponent } from './secure/station-details/widgets/oee-calculation/oee-calculation.component';
import { NgChartsModule } from 'ng2-charts';
import { OeeChartComponent } from './secure/station-details/widgets/oee-calculation/oee-chart/oee-chart.component';
import { StatusWidgetComponent } from './secure/station-details/widgets/status-widget/status-widget.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkstationConfigComponent } from './secure/config/workstation-config/workstation-config.component';
import { GaugeComponent } from './secure/station-details/widgets/gauge/gauge.component';
import { FeedbacksComponent } from './secure/station-details/feedbacks/feedbacks.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { SignInComponent } from './public/sign-in/sign-in.component';
import { PlantSelectionComponent } from './secure/plant-selection/plant-selection.component';
import { PredictiveMaintenanceAnomalyOverviewComponent } from './secure/station-details/predictive-maintenance/predictive-maintenance-anomaly-overview/predictive-maintenance-anomaly-overview.component';
import { PredictiveMaintenanceComponent } from './secure/station-details/predictive-maintenance/predictive-maintenance.component';
import { PredictiveMaintenanceMachineOverviewComponent } from './secure/station-details/predictive-maintenance/predictive-maintenance-machine-overview/predictive-maintenance-machine-overview.component';
import { PredictiveMaintenanceChartComponent } from './secure/station-details/predictive-maintenance/predictive-maintenance-chart/predictive-maintenance-chart.component';
import { GenericCardComponent } from './secure/station-details/widgets/generic-card/generic-card.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbsComponent } from './secure/breadcrumbs/breadcrumbs.component';
import { AnomalyObserveSpectogramModalComponent } from './secure/station-details/predictive-maintenance/predictive-maintenance-anomaly-overview/anomaly-observe-spectogram-modal/anomaly-observe-spectogram-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    StationSelectionComponent,
    NavbarComponent,
    ConfigComponent,
    StationDetailsComponent,
    OeeCalculationComponent,
    OeeChartComponent,
    StatusWidgetComponent,
    WorkstationConfigComponent,
    GaugeComponent,
    FeedbacksComponent,
    SignUpComponent,
    SignInComponent,
    PlantSelectionComponent,
    PredictiveMaintenanceComponent,
    PredictiveMaintenanceChartComponent,
    PredictiveMaintenanceMachineOverviewComponent,
    PredictiveMaintenanceAnomalyOverviewComponent,
    GenericCardComponent,
    BreadcrumbsComponent,
    AnomalyObserveSpectogramModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    TableModule,
    FormsModule, // two way data-binding doesn't work without this module
    ModalModule,
    NgbCollapseModule,
    HttpClientModule,
    BreadcrumbModule,
    FontAwesomeModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
