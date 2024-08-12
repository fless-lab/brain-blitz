import { lightTheme } from './light';
import { darkTheme } from './dark';
import { oceanTheme } from './ocean';
import { natureGreenTheme } from './natural';
import { earthTonesDarkTheme } from './earth';

function generateThemes() {
  const themeList = [
    lightTheme,
    darkTheme,
    oceanTheme,
    natureGreenTheme,
    earthTonesDarkTheme,
  ];

  const themeOptions = themeList.map(theme => ({
    label: theme.label,
    value: theme.value,
  }));

  const themes = themeList.reduce((acc, theme) => {
    acc[theme.value] = theme.properties;
    return acc;
  }, {} as Record<string, Record<string, string>>);

  return { themeOptions, themes };
}

export const { themeOptions, themes } = generateThemes();
