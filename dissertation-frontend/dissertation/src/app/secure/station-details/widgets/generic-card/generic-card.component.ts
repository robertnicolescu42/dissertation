import { Component, Input, OnInit } from '@angular/core';

interface Field {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss'],
})
export class GenericCardComponent implements OnInit {
  @Input() title!: string;
  @Input() fields!: Field[];
  @Input() rightTemplate: string = '';

  constructor() {}
  ngOnInit(): void {}
}
