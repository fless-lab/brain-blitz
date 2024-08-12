import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { themeOptions } from '../../../../styles/themes';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  themes = themeOptions;

  constructor(private themeService: ThemeService) {}

  switchTheme(event: string | Event): void {
    const theme = typeof event === 'string' ? event : (event.target as HTMLSelectElement).value;
    this.themeService.setTheme(theme);
  }
}
