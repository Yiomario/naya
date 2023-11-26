import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido', // Redirige a la página 'bienvenido'
    pathMatch: 'full',
  },  
  

  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'bienvenido',
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },

  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./cambiar-contrasena/cambiar-contrasena.module').then( m => m.CambiarContrasenaPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'loginalumno',
    loadChildren: () => import('./loginalumno/loginalumno.module').then( m => m.LoginalumnoPageModule)
  },
  {
    path: 'folderalumno',
    loadChildren: () => import('./folderalumno/folderalumno.module').then( m => m.FolderalumnoPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'asingaturas',
    loadChildren: () => import('./asingaturas/asingaturas.module').then( m => m.AsingaturasPageModule)
  },
  {
    path: 'usuarioprogramacion',
    loadChildren: () => import('./usuarioprogramacion/usuarioprogramacion.module').then( m => m.UsuarioprogramacionPageModule)
  },
  {
    path: 'usuariocalidad',
    loadChildren: () => import('./usuariocalidad/usuariocalidad.module').then( m => m.UsuariocalidadPageModule)
  },
  {
    path: 'usuarioarquitectura',
    loadChildren: () => import('./usuarioarquitectura/usuarioarquitectura.module').then( m => m.UsuarioarquitecturaPageModule)
  },
  
  {
    path: 'scanearqr',
    loadChildren: () => import('./scanearqr/scanearqr.module').then( m => m.ScanearqrPageModule)
  },
  {
    path: 'asignaturaalumno',
    loadChildren: () => import('./asignaturaalumno/asignaturaalumno.module').then( m => m.AsignaturaalumnoPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
