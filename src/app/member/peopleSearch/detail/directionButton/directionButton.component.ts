import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-btn-direction',
  templateUrl: 'directionButton.component.html',
  styleUrls: ['directionButton.component.scss'],
})
export class DirectionButtonComponent implements OnInit {
  @Input() isNext = true;
  @Input() color = "#276FCF";
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  goNext() {
  }

  handleClick() {
    this.onClick.emit();
  }
}
