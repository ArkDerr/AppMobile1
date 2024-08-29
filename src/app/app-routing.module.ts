import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionarLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin},
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin},
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./page/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
