import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant-config',
  templateUrl: './plant-config.component.html',
  styleUrls: ['./plant-config.component.scss'],
})
export class PlantConfigComponent {
  constructor() {}

  @Input()
  plant = {
    plantIndex: '',
    plantName: '',
    description: '',
    imageUrl: '',
  };

  createForm() {}

  onSubmit() {
    // Do something with the form data
    console.log(this.plant);
  }
}
