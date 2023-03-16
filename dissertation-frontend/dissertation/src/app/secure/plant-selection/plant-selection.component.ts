import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-selection',
  templateUrl: './plant-selection.component.html',
  styleUrls: ['./plant-selection.component.scss'],
})
export class PlantSelectionComponent {
  plants = [
    {
      id: 'PIT',
      title: 'PIT',
      description: 'Pitești',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Downtown_park_Pitesti_09.jpg',
    },
    {
      id: 'TOK',
      title: 'TOK',
      description: 'Tokyo',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
    },
    {
      id: 'LON',
      title: 'LON',
      description: 'London',
      imageUrl:
        'https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg',
    },
  ];
}