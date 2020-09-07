import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-next-report',
  templateUrl: 'nextReport.component.html',
  styleUrls: ['nextReport.component.scss'],
})
export class NextReportComponent implements OnInit {
  @Input() title: string;
  @Input() desc: string;
  @Input() imgUrl: string;
  @Output() onNext = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() { }

  goNext() {
    this.onNext.emit();
    window.scrollTo(0, 0);
  }
}
