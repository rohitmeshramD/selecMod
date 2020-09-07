import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniLifeEventsComponent } from './member/peopleSearch/detail/miniLifeEvents/miniLifeEvents.component';
import { MiniFamilyComponent } from './member/peopleSearch/detail/miniFamily/miniFamily.component';
import { DetailNameSearchMemberComponent } from './member/peopleSearch/detail/detail.component';
import { TutorialModalComponent } from './member/peopleSearch/detail/tutorialModal/tutorialModal.component';
import { DirectionButtonComponent } from './member/peopleSearch/detail/directionButton/directionButton.component';
import { MiniLinearComponent } from './member/peopleSearch/detail/miniLinear/miniLinear.component';
import { MiniSocialMediaComponent } from './member/peopleSearch/detail/miniSocialMedia/miniSocialMedia.component';
import { NextReportComponent } from './member/peopleSearch/detail/nextReport/nextReport.component';
import { ReportActionComponent } from './member/peopleSearch/detail/reportAction/reportAction.component';

import { UiSwitchModule } from "ngx-ui-switch";
import { NgSelectModule } from "@ng-select/ng-select";
// import { TooltipModule } from "ng2-tooltip-directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    DirectionButtonComponent,
    MiniLifeEventsComponent,
    MiniFamilyComponent,
    DetailNameSearchMemberComponent,
    TutorialModalComponent,
    MiniLinearComponent,
    MiniSocialMediaComponent,
    NextReportComponent,
    ReportActionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    UiSwitchModule,
    NgSelectModule,
    // TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
