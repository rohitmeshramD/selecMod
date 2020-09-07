import { Component, OnDestroy, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { BaseComponent } from "../../../../../clientCommon/components/BaseComponent";
import { ServiceHelperService } from "../../../../../clientCommon/services/serviceHelper.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DetailPeopleSearchMember } from "../../detailPeopleSearchMember";

@Component({
  moduleId: module.id,
  templateUrl: "detail.component.html",
  styleUrls: ["detail.component.scss"],
})
export class DetailNameSearchMemberComponent
  extends DetailPeopleSearchMember
  implements OnInit, OnDestroy {
  step: number = 3;
  href: string = "";

  constructor(
    serviceHelperService: ServiceHelperService,
    public sanitizer: DomSanitizer,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super(serviceHelperService, activatedRoute);
    this.pageCategory = BaseComponent.PAGE_CATOGORY.nameSearch;
  }

  ngOnInit() {
    this.href = this.router.url;
    return this.onInit().then(() => {});
  }

  ngOnDestroy() {
    return super.onDestroy();
  }
}
