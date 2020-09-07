import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-tutorial-modal',
  templateUrl: 'tutorialModal.component.html',
  styleUrls: ['tutorialModal.component.scss'],
})
export class TutorialModalComponent implements OnInit {
  @Input() desc = '';

  constructor() {
  }

  ngOnInit() {
  }

  goNext() {
  }
}
