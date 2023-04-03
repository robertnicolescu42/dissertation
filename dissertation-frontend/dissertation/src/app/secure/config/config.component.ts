import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Workstation } from '../../types/work-station';
import { WorkstationsService } from '../services/workstations.service';
import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  plants: any[] = [];
  workstations: Workstation[] | any[] = [];
  editPlant: boolean = false;

  constructor(
    private workstationService: WorkstationsService,
    private plantsService: PlantsService
  ) {}

  ngOnInit(): void {
    // this.workstationService.getWorkstations().subscribe((res) => {
    //   this.workstations = res;
    // });
    
    this.workstationService.getWorkstationsByPlantIndex("PIT").subscribe((res) => {
      this.workstations = res;
    });

    this.plantsService.getPlants().subscribe((res) => {
      this.plants = res;
    });
  }

  // selectedPlant: any = this.plants[0];
  selectedPlant: any;
  selectedWorkstation: any;
  shouldFadeIn = false;

  @ViewChild('workstationConfigComponent')
  workstationConfigComponent!: ElementRef;

  selectWorkstation(workstation: any) {
    this.selectedWorkstation = workstation;
    this.shouldFadeIn = true;

    setTimeout(() => {
      this.shouldFadeIn = false;
    }, 1000);
  }

  addWorkstation() {
    this.selectedWorkstation = {
      plantIndex: '',
      stationId: '',
      displayName: '',
      description: '',
      cycleTime: 0,
      runningTime: 0,
      productionCount: 0,
      defectCount: 0,
      isOeeCalculable: false,
      equipmentNumber: '',
      cycleTimeDelay: 0,
    };
  }

  selectPlant(plantIndex: any) {
    let foundPlant = this.plants.find(
      (plant) => plant.plantIndex === plantIndex
    );
    if (foundPlant) {
      this.selectedPlant = foundPlant;
      this.selectedWorkstation = null;
    }
  }

  addPlant() {
    this.selectedWorkstation = null;
    this.editPlant = true;
    this.selectedPlant = {
      plantIndex: '',
      plantName: '',
      description: '',
      imageUrl: '',
    };
  }
}
