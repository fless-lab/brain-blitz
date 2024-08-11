import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { SelectComponent } from './components/form/select/select.component';

@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeSwitcherComponent,
    SelectComponent
  ]
})
export class SharedModule { }
