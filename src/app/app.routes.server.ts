import { RenderMode, ServerRoute } from '@angular/ssr';
import { notas } from './data/notas';

export const serverRoutes: ServerRoute[] = [
  {
    // uma página estática por nota, geradas a partir do próprio data/notas.ts
    path: 'notas/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => notas.map(({ slug }) => ({ slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
