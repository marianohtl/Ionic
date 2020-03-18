import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'layout-menu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split', loadChildren: './layout-split/layout-split.module#LayoutSplitPageModule' },
  { path: 'layout-grid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'utilidades-css', loadChildren: './utilidades-css/utilidades-css.module#UtilidadesCssPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'badges', loadChildren: './badges/badges.module#BadgesPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'comp-button', loadChildren: './comp-button/comp-button.module#CompButtonPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
