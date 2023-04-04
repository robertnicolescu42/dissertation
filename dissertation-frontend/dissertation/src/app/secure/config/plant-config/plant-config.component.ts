import { Component, Input } from '@angular/core';
import { PlantsService } from '../../services/plants.service';

@Component({
  selector: 'app-plant-config',
  templateUrl: './plant-config.component.html',
  styleUrls: ['./plant-config.component.scss'],
})
export class PlantConfigComponent {
  constructor(private plantsService: PlantsService) {}

  @Input()
  plant = {
    plantIndex: '',
    title: '',
    description: '',
    imageUrl: '',
  };

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

    this.plantsService.addPlant(plant).subscribe();
  }
}
