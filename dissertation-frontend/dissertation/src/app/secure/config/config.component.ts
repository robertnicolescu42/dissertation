import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Workstation } from '../../types/work-station';
import { WorkstationsService } from '../services/workstations.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  editPlant: boolean = false;
  constructor(private workstationService: WorkstationsService) {}

  ngOnInit(): void {
    this.workstationService.getWorkstations().subscribe((res) => {
      this.workstations = res;
    });
  }

  plants = [
    {
      plantIndex: 'PLANT_A',
      plantName: 'Plant A',
      description: 'This is plant A',
      imageUrl: 'https://picsum.photos/500/300',
    },
    {
      plantIndex: 'PLANT_B',
      plantName: 'Plant B',
      description: 'This is plant B',
      imageUrl: 'https://picsum.photos/500/400',
    },
    {
      plantIndex: 'PLANT_C',
      plantName: 'Plant C',
      description: 'This is plant C',
      imageUrl: 'https://picsum.photos/500/500',
    },
  ];

  workstations: Workstation[] | any[] = [];

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
