import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'selected-theme';

  constructor() {
    const savedTheme = this.getStoredTheme();
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  getStoredTheme(): string | null {
    return localStorage.getItem(this.themeKey);
  }
}
