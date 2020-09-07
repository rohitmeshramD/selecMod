import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { ServiceHelperService } from "../../../../../../clientCommon/services/serviceHelper.service";
// import { PersonDetail } from "../../../personDetail";

declare var $: any;

@Component({
  selector: 'app-mini-social-media',
  templateUrl: 'miniSocialMedia.component.html',
  styleUrls: ['miniSocialMedia.component.scss'],
})
export class MiniSocialMediaComponent implements OnInit, OnDestroy, OnChanges {
  href: string = "";
  scrollLeft: number = 0;
  @Output() goPrev = new EventEmitter<any>();
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
    //   // console.log(this.person);
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

  handlePrev() {
    window.scrollTo(0, 0);
    this.goPrev.emit();
  }

  handleNext() {
    window.scrollTo(0, 0);
    this.goNext.emit();
  }

  handleScrollRight() {
    // if (this.scrollLeft > this.person.photos.length * 300) {
    //   return;
    // }

    // this.scrollLeft += 300;
    // const container = document.querySelector('.mini-reports-body-diagram__body');
    // if (container.scrollLeft < this.person.photos.length * 300) {
    //   container.scrollLeft += 300;
    // }
  }

  handleScrollLeft() {
    // this.scrollLeft -= 300;
    // if (this.scrollLeft < 0) {
    //   this.scrollLeft = 0;
    // }

    const container = document.querySelector('.mini-reports-body-diagram__body');
    if (container.scrollLeft > 0) {
      container.scrollLeft -= 300;
    }
  }
}
