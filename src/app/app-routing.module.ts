import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = 

[
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'usuario-all',
    loadChildren: () => import('./usuario/usuario-all/usuario-all.module').then( m => m.UsuarioAllPageModule)
  },
  {
    path: 'usuario-detail/:id',
    loadChildren: () => import('./usuario/usuario-detail/usuario-detail.module').then( m => m.UsuarioDetailPageModule)
  },
  {
    path: 'usuario-edit/:id',
    loadChildren: () => import('./usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'usuario-list',
    loadChildren: () => import('./usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule), canActivate: [AuthGuard]
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'usuario-add',
    loadChildren: () => import('./usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  

  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./restablecer-contrasena/restablecer-contrasena.module').then( m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'elegir-mascota',
    loadChildren: () => import('./elegir-mascota/elegir-mascota.module').then(m => m.ElegirMascotaPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'mascota-combatible',
    loadChildren: () => import('./mascota-combatible/mascota-combatible.module').then( m => m.MascotaCombatiblePageModule)
  },


  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },


{
    path: 'localizacion',
    loadChildren: () => import('./localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  

  
  
  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
