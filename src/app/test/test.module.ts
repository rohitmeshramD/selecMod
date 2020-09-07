import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';

@NgModule({
  declarations: [
    TestComponent,
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TestComponent,
    IconButtonComponent,
  ],
  providers: [],
})

export class TestModule { }
