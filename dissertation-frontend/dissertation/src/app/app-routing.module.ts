import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './secure/config/config.component';
import { StationSelectionComponent } from './secure/station-selection/station-selection.component';

const routes: Routes = [
  { path: 'config', component: ConfigComponent },
  { path: 'station-selection', component: StationSelectionComponent },
  { path: '**', redirectTo: 'station-selection' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
