import { Routes } from '@angular/router';
import { RootLayoutComponent } from './shared/components/root-layout/root-layout.component';


export const routes: Routes =  [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'bump',
        loadChildren: () => import('./features/bump/bump.module').then(m => m.BumpModule)
      },
      {
        path: 'help',
        loadChildren: () => import('./features/assist/assist.module').then(m => m.AssistModule)
      }
    ]
  }
];
