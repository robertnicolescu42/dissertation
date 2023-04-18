import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Workstation } from '../../types/work-station';
import { WorkstationsService } from '../services/workstations.service';
import { PlantsService } from '../services/plants.service';
import { Plant } from '../../types/plant';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  plants: any[] = [];
  workstations: Workstation[] | any[] = [];
  editPlant: boolean = false;
  newPlant: boolean = false;

  constructor(
    private workstationService: WorkstationsService,
    private plantsService: PlantsService
  ) {}

  ngOnInit(): void {
    // this.workstationService.getWorkstations().subscribe((res) => {
    //   this.workstations = res;
    // });

    // this.workstationService.getWorkstationsByPlantIndex("PIT").subscribe((res) => {
    //   this.workstations = res;
    // });

    this.plantsService.getPlants().subscribe((res) => {
      this.plants = res;
    });
  }

  selectedPlant: any = this.plants[0];
  // selectedPlant: any;
  selectedWorkstation: any;
  shouldFadeIn = false;
  isNewWorkstation: boolean = false;

  @ViewChild('workstationConfigComponent')
  workstationConfigComponent!: ElementRef;

  selectWorkstation(workstation: any) {
    this.selectedWorkstation = workstation;
    this.shouldFadeIn = true;
    this.isNewWorkstation = false;
    setTimeout(() => {
      this.shouldFadeIn = false;
    }, 1000);
  }

  addWorkstation() {
    this.selectedWorkstation = {
      plantIndex: this.selectedPlant.plantIndex,
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

    this.isNewWorkstation = true;
  }

  selectPlant(plantIndex: any) {
    let foundPlant = this.plants.find(
      (plant) => plant.plantIndex === plantIndex
    );
    if (foundPlant) {
      this.selectedPlant = foundPlant;
      this.selectedWorkstation = null;
      this.newPlant = false;
    }

    this.workstationService
      .getWorkstationsByPlantIndex(this.selectedPlant.plantIndex)
      .subscribe((res) => {
        this.workstations = res;
      });
  }

  addPlant() {
    console.log(this.selectedPlant);
    this.selectedWorkstation = null;
    this.editPlant = false;
    this.newPlant = true;
    this.selectedPlant = {
      plantIndex: '',
      title: '',
      description: '',
      imageUrl: '',
    };
  }

  onPlantAdded(plant: Plant) {
    this.plants.push(plant);

    this.selectedPlant = this.plants[this.plants.length - 1];
    this.selectPlant(this.plants[this.plants.length - 1]);
  }

  onPlantDeleted(plant: Plant) {
    this.plants = this.plants.filter((p) => p.plantIndex !== plant.plantIndex);
    this.selectedPlant = this.plants[0];
    this.selectPlant(this.plants[0]);
  }

  onWorkstationAdded(workstation: Workstation) {
    this.workstations.push(workstation);
    this.selectWorkstation(workstation);
  }

  onWorkstationUpdated(workstation: Workstation) {
    // update workstation in workstations array
    this.workstations = this.workstations.map((w) => {
      if (w.stationId === workstation.stationId) {
        return workstation;
      }
      return w;
    });
    this.selectWorkstation(workstation);
  }

  onWorkstationDeleted(workstation: Workstation) {
    this.workstations = this.workstations.filter(
      (w) => w.stationId !== workstation.stationId
    );
    this.selectedWorkstation = null;
  }
}
