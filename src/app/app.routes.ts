import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'cadastrar',
    loadComponent: () => import('./cadastrar/cadastrar.page').then( m => m.CadastrarPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'busca',
    loadComponent: () => import('./busca/busca.page').then( m => m.BuscaPage)
  },
  {
    path: 'marcacao',
    loadComponent: () => import('./marcacao/marcacao.page').then( m => m.MarcacaoPage)
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },

];
