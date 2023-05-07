import { Component, Input } from '@angular/core';
import { AlertGroup } from '../../../../types/alert-group';

@Component({
  selector: 'app-alert-group-card',
  templateUrl: './alert-group-card.component.html',
  styleUrls: ['./alert-group-card.component.scss'],
})
export class AlertGroupCardComponent {
  @Input() alertGroup: AlertGroup | undefined;
}
