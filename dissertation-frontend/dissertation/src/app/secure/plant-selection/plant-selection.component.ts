import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'app-plant-selection',
  templateUrl: './plant-selection.component.html',
  styleUrls: ['./plant-selection.component.scss'],
})
export class PlantSelectionComponent implements OnInit {
  plants = [
    {
      plantIndex: 'PIT',
      title: 'Pitești',
      description: 'Pitești, România',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Downtown_park_Pitesti_09.jpg',
    },
    {
      plantIndex: 'TOK',
      title: 'Tokyo',
      description: 'Tokyo, Japan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
    },
    {
      plantIndex: 'LON',
      title: 'London',
      description: 'London, UK',
      imageUrl:
        'https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg',
    },
  ];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private plantsService: PlantsService
  ) {
    this.breadcrumbService.set('@plant-selection', 'Child One');
  }
  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((res) => {
      console.log(res);
      this.plants = res;
    });
  }
}
