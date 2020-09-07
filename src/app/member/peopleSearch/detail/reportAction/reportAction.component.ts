import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-report-action',
  templateUrl: 'reportAction.component.html',
  styleUrls: ['reportAction.component.scss'],
})
export class ReportActionComponent implements OnInit {
  @Input() downloadPath: string;
  @Output() setMonitoring = new EventEmitter<any>();
  
  constructor() {
  }

  ngOnInit() {
  }

  addNote() {
    console.log('clicked');
  }

  handleSetMonitoring(val) {
    this.setMonitoring.emit(val);
  }
}
