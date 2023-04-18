import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { Plant } from '../../../types/plant';

@Component({
  selector: 'app-plant-config',
  templateUrl: './plant-config.component.html',
  styleUrls: ['./plant-config.component.scss'],
})
export class PlantConfigComponent {
  constructor(private plantsService: PlantsService) {}

  @Output() plantAdded = new EventEmitter<Plant>();
  @Output() plantDeleted = new EventEmitter<Plant>();

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
    let plant = {
      plantIndex: this.plant.plantIndex,
      title: this.plant.title,
      description: this.plant.description,
      imageUrl: this.plant.imageUrl,
    };

    if (!this.newPlant) {
      this.plantsService.addPlant(plant).subscribe();
      this.plantAdded.emit(plant);
    } else {
      this.plantsService.editPlant(plant).subscribe();
    }
  }

  deletePlant() {
    this.plantDeleted.emit(this.plant);
  }
}
