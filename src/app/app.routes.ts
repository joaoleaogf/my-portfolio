import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'João Leão — Desenvolvedor de Software',
  },
  {
    path: 'notas',
    loadComponent: () => import('./pages/notas/notas').then((m) => m.Notas),
    title: 'Notas — João Leão',
  },
  {
    // sem `title` de propósito: quem define é o SeoService dentro do componente,
    // com o título da nota. O TitleStrategy roda depois e sobrescreveria.
    path: 'notas/:slug',
    loadComponent: () => import('./pages/nota/nota').then((m) => m.Nota),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Página não encontrada — João Leão',
  },
];
