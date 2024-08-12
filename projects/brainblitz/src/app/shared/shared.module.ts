import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { SelectComponent } from './components/form/select/select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    SelectComponent,
    NavbarComponent,
    FooterComponent,
    RootLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ThemeSwitcherComponent,
    SelectComponent,
    NavbarComponent,
    FooterComponent,
    RootLayoutComponent
  ]
})
export class SharedModule { }
