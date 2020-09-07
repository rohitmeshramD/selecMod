import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-modal-get-alerts',
  templateUrl: 'getAlerts.component.html',
  styleUrls: ['getAlerts.component.scss'],
})
export class GetAlertsComponent implements OnInit {
  @Output() setMonitoring = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  goNext() {
  }

  handleSetMonitoring(val) {
    this.setMonitoring.emit(val);
  }
}
