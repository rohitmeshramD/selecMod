import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-modal-save-report',
  templateUrl: 'saveReport.component.html',
  styleUrls: ['saveReport.component.scss'],
})
export class SaveReportComponent implements OnInit {
  @Input() downloadPath:string;

  constructor() {
  }

  ngOnInit() {
  }

  goNext() {
  }
}
