import { Component, Input, OnInit } from '@angular/core';
import { Workstation } from '../../../../types/work-station';

@Component({
  selector: 'app-status-widget',
  templateUrl: './status-widget.component.html',
  styleUrls: ['./status-widget.component.scss'],
})
export class StatusWidgetComponent implements OnInit {
  @Input()
  workstation?: Workstation;

  plannedCycleTime: number = 0;
  plannedRunningTime: number = 0;

  ngOnInit(): void {}
}
