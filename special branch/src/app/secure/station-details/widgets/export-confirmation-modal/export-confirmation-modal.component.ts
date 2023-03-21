import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-export-confirmation-modal',
  templateUrl: './export-confirmation-modal.component.html',
  styleUrls: ['./export-confirmation-modal.component.scss']
})
export class ExportConfirmationModalComponent {
  @Output() confirmExport = new EventEmitter();
  @Output() cancelExport = new EventEmitter();

  confirm() {
    this.confirmExport.emit();
  }

  cancel() {
    this.cancelExport.emit();
  }
}
