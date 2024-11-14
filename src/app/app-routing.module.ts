import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'reset-password', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'Horario', loadChildren: () => import('./horario/horario.module').then(m => m.HorarioPageModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserPageModule) },
  { path: 'horario-c', loadChildren: () => import('./horario-c/horario-c.module').then(m => m.HorarioCPageModule) },   
  {path: 'registro',loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
