import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Workstation } from '../../types/work-station';
import { WorkstationsService } from '../services/workstations.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  constructor(private workstationService: WorkstationsService) {}

  ngOnInit(): void {
    this.workstationService.getWorkstations().subscribe((res) => {
      // this.workstations = res;
      this.workstations = this.workstations.concat(res);
      // this.workstations = this.workstations.concat(res);
      // this.workstations = this.workstations.concat(res);
      // this.workstations = this.workstations.concat(res);
      // this.workstations = this.workstations.concat(res);
      // this.workstations = this.workstations.concat(res);
    });
  }

  plants = [
    {
      id: 1,
      displayName: 'Plant A',
      workstations: [
        { id: 1, displayName: 'Station A1' },
        { id: 2, displayName: 'Station A2' },
        { id: 3, displayName: 'Station A3' },
      ],
    },
    {
      id: 2,
      displayName: 'Plant B',
      workstations: [
        { id: 4, displayName: 'Station B1' },
        { id: 5, displayName: 'Station B2' },
        { id: 6, displayName: 'Station B3' },
      ],
    },
    {
      id: 3,
      displayName: 'Plant C',
      workstations: [
        { id: 7, displayName: 'Station C1' },
        { id: 8, displayName: 'Station C2' },
        { id: 9, displayName: 'Station C3' },
      ],
    },
  ];

  workstations: Workstation[] | any[] = [];

  selectedPlant: any = this.plants[0];
  // selectedPlant: any;
  selectedWorkstation: any;
  shouldFadeIn = false;

  @ViewChild('workstationConfigComponent')
  workstationConfigComponent!: ElementRef;

  selectWorkstation(workstation: any) {
    this.selectedWorkstation = workstation;
    this.shouldFadeIn = true;

    setTimeout(() => {
      this.shouldFadeIn = false;
    }, 1000); // Set to the same duration as the CSS animation
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

  addPlant() {
    this.selectedWorkstation = null;
  }
}
