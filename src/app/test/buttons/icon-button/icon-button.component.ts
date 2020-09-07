import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() className: string = "";
  @Input() type: string = "";
  @Input() color: string = "";
  @Input() rounded: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() height: string = "";
  @Input() shadow: boolean = true;
  @Input() icon: string = "";
  @Input() iconRight: boolean = false;
  @Input() borderColor: string = "";
  @Output() onClick = new EventEmitter();
  customClass = "";
  imgSrc = "";

  constructor() {}

  ngOnInit() {
    this.customClass += this.className + ' ';
    this.customClass += "custom-btn-" + this.type + ' ';
    this.customClass += "custom-btn-color-"  + this.color + ' ';
    this.customClass += (this.rounded ? "custom-btn-rounded" : "") + ' ';
    this.customClass += (this.fullWidth ? "custom-btn-full-width" : "") + ' ';
    this.customClass += (this.shadow ? "custom-btn-shadow" : "") + ' ';
    this.customClass += (this.iconRight ? "custom-btn-icon-right" : "") + ' ';
    this.customClass += (this.borderColor ? "custom-btn-border-" + this.borderColor : "");
    this.imgSrc = (this.icon !== "" ? `/assets/images/new-icons/ic-${this.icon}.png` : "");
  }

  ngOnDestroy() {}

  handleClick() {
    this.onClick.emit();
  }
}
