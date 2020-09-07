import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniLifeEventsComponent } from './member/peopleSearch/detail/miniLifeEvents/miniLifeEvents.component';

const routes: Routes = [
  {path: 'life-events', component: MiniLifeEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
