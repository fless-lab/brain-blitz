import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  themes = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Ocean', value: 'ocean' }
  ];

  constructor(private themeService: ThemeService) {}

  switchTheme(event: string | Event): void {
    const theme = typeof event === 'string' ? event : (event.target as HTMLSelectElement).value;
    this.themeService.setTheme(theme);
  }
}
