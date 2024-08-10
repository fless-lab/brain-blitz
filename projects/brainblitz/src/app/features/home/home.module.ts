import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureHighlightComponent } from './components/feature-highlight/feature-highlight.component';

@NgModule({
  declarations: [
    HeroComponent,
    FeatureHighlightComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
