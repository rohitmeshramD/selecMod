import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-social-card',
  templateUrl: 'socialCard.component.html',
  styleUrls: ['socialCard.component.scss'],
})
export class SocialCardComponent implements OnInit {
  @Input() username: string= "";
  @Input() name: string= "";
  @Input() type: string = "";
  @Input() color: string = "";
  @Input() imgSrc: string = "";
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }
}
