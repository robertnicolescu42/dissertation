import { Component, OnInit } from '@angular/core';
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
      this.workstations = res;
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

  selectedPlant: any;
  selectedWorkstation: any;

  selectWorkstation(workstation: any) {
    this.selectedWorkstation = workstation;
  }

  addWorkstation() {
    this.selectedWorkstation = undefined;
  }

  addPlant() {}
}
