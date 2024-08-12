import { NgModule } from '@angular/core';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BumpRoutingModule } from './bump-routing.module';

@NgModule({
  declarations: [
    TestPageComponent,
  ],
  imports: [
    CommonModule,
    BumpRoutingModule,
    SharedModule,
  ]
})
export class BumpModule { }
