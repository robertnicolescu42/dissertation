import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
  animateChild,
} from '@angular/animations';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss'],
  animations: [
    trigger('notificationList', [
      transition(':enter', [
        query('@notificationItems', stagger(50, animateChild()), {
          optional: true,
        }),
      ]),
    ]),
    trigger('notificationItems', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }), // initial
        animate(
          '.5s cubic-bezier(.13,.24,.15,.73)',
          style({ transform: 'scale(1)', opacity: 1 })
        ), // final
        query('@notificationBadge', stagger(0, animateChild()), {
          optional: true,
        }),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate(
          '.8s ease-out',
          style({
            transform: 'scale(0.5)',
            opacity: 0,
            height: '0px',
            margin: '0px',
          })
        ),
      ]),
    ]),
    trigger('notificationBadge', [
      transition(':enter,:increment', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate(
          '.5s cubic-bezier(.8, -0.6, 0.2, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 })
        ),
      ]),
    ]),

    trigger('groupList', [
      transition(':enter', [
        query('@groupItems', stagger(50, animateChild()), { optional: true }),
      ]),
    ]),
    trigger('groupItems', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate(
          '.6s cubic-bezier(.13,.24,.15,.73)',
          style({ transform: 'scale(1)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate(
          '.6s ease-out',
          style({
            transform: 'scale(0.5)',
            opacity: 0,
            height: '0px',
            margin: '0px',
          })
        ),
      ]),
    ]),
  ],
})
export class AlertListComponent implements OnInit {
  private _collapsed = false;

  @Input()
  plantIndex: string | undefined = '';

  alertGroups: any[] = [
    // {
    //   alertGroupId: '1',
    //   plantIndex: 'A',
    //   stationId: 'Station 1',
    //   severity: 'WARNING',
    //   code: '123',
    //   message: 'Alert 1',
    //   timestamp: '2023-04-19T10:30:00',
    // },
    // {
    //   alertGroupId: '2',
    //   plantIndex: 'B',
    //   stationId: 'Station 2',
    //   severity: 'INFO',
    //   code: '456',
    //   message: 'Alert 2',
    //   timestamp: '2023-04-19T11:15:00',
    // },
    // {
    //   alertGroupId: '3',
    //   plantIndex: 'C',
    //   stationId: 'Station 3',
    //   severity: 'ERROR',
    //   code: '789',
    //   message: 'Alert 3',
    //   timestamp: '2023-04-19T12:00:00',
    // },
  ];
  public messages: any[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.connect().subscribe((message) => {
      this.messages.push(message);

      if (message.plantIndex === this.plantIndex) {
        this.alertGroups.push(message);
      }
    });
  }

  infoCount: number | undefined;
  warningCount: number | undefined;
  errorCount: number | undefined;

  get collapsed(): boolean {
    return this._collapsed;
  }

  ngOnInit() {}

  ngOnChanges() {
    this.updateCounts();
  }

  private updateCounts() {
    // this.infoCount = this.alertGroups?.filter(
    //   (group) => group.severity === 'INFO'
    // ).length;
    // this.warningCount = this.alertGroups?.filter(
    //   (group) => group.severity === 'WARNING'
    // ).length;
    // this.errorCount = this.alertGroups?.filter(
    //   (group) => group.severity === 'ERROR'
    // ).length;
  }

  toggleCollapse() {
    this._collapsed = !this._collapsed;
  }

  trackByFn(index: any, item: any) {
    // return (
    //   item.alertGroupId + item.status.toString() + item.severity.toString()
    // );
  }
}
