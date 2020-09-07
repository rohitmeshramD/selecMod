import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { ServiceHelperService } from "../../../../../../clientCommon/services/serviceHelper.service";
// import { PersonDetail } from "../../../personDetail";

declare var $: any;

@Component({
  selector: 'app-mini-family',
  templateUrl: 'miniFamily.component.html',
  styleUrls: ['miniFamily.component.scss'],
})
export class MiniFamilyComponent  implements OnInit, OnDestroy, OnChanges {
  href = "";
  showAllRelatives = false;
  @Output() goNext = new EventEmitter<any>();

  constructor(
    // public serviceHelperService: ServiceHelperService,
    public changeDetectorRef: ChangeDetectorRef,
    activatedRoute: ActivatedRoute,
    private router: Router) {
    // super(serviceHelperService, activatedRoute);
  }

  ngOnInit() {
    this.href = this.router.url;

    // return this.init().then(() => {
    //   this.changeDetectorRef.detectChanges();
    // });
  }

  ngOnDestroy() {
    // return super.onDestroy();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  init() {
    // Tooltip init
    setTimeout(() => {
      $(".tooltip-container").tooltip({
        html: true,
        trigger: "click",
      });
    }, 0);
    // return super.init();
  }

  adjustAnchorOffset() {
    window.scrollBy(0, -187);
    return false;
  }

  switchShowAllRelative() {
    this.showAllRelatives = !this.showAllRelatives;
  }

  handleNext() {
    this.goNext.emit();
  }
}
