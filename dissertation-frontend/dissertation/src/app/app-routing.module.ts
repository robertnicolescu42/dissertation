import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './public/sign-in/sign-in.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { ConfigComponent } from './secure/config/config.component';
import { PlantSelectionComponent } from './secure/plant-selection/plant-selection.component';
import { StationSelectionComponent } from './secure/station-selection/station-selection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'plant-selection',
    pathMatch: 'full',
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  { path: 'config', component: ConfigComponent },
  { path: 'plant-selection', component: PlantSelectionComponent },
  { path: 'plant-selection/:id', component: StationSelectionComponent },
  { path: '**', redirectTo: 'signIn' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
