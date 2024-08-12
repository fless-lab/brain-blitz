import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: "bump",
    loadChildren: () =>
      import('./features/bump/bump.module').then((m) => m.BumpModule),
  }
];
