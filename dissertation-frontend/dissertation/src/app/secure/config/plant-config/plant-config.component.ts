import { Component, Input } from '@angular/core';
import { PlantsService } from '../../services/plants.service';

@Component({
  selector: 'app-plant-config',
  templateUrl: './plant-config.component.html',
  styleUrls: ['./plant-config.component.scss'],
})
export class PlantConfigComponent {
  constructor(private plantsService: PlantsService) {
    console.log(
      '🚀 ~ file: plant-config.component.ts:37 ~ PlantConfigComponent ~ onSubmit ~ this.newPlant:',
      this.newPlant
    );
  }

  @Input()
  plant = {
    plantIndex: '',
    title: '',
    description: '',
    imageUrl: '',
  };

  @Input()
  newPlant: boolean = false;

  createForm() {}

  onSubmit() {
    // Do something with the form data
    console.log(this.plant);

    let plant = {
      plantIndex: this.plant.plantIndex,
      title: this.plant.title,
      description: this.plant.description,
      imageUrl: this.plant.imageUrl,
    };

    if (!this.newPlant) {
      this.plantsService.addPlant(plant).subscribe();
    } else {
      this.plantsService.editPlant(plant).subscribe();
    }
  }

  deletePlant() {
    this.plantsService.deletePlant(this.plant.plantIndex).subscribe();
  }
}
