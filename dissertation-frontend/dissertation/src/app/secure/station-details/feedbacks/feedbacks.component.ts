import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
})
export class FeedbacksComponent implements OnInit {
  @Input()
  title: string = 'n/a';

  @Input()
  total: number = 0;

  @Input()
  lastResult: boolean = false;

  @Input()
  lastId: string = 'n/a';

  @Input()
  lastTime: Date = new Date();

  @Input()
  feedbackType: string = 'n/a';

  @Input()
  rate: number = 0;

  ngOnInit(): void {}
}
