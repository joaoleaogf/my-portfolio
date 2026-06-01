import { DOCUMENT } from '@angular/common';
import { afterNextRender, inject, Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

/**
 * Gerencia o tema (claro/escuro). O tema inicial é aplicado por
 * public/theme-init.js (antes do paint, sem flash e sem script inline —
 * compatível com a CSP). Aqui só sincronizamos o estado e persistimos a troca.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  readonly theme = signal<Theme>('dark');

  constructor() {
    afterNextRender(() => {
      const current = this.doc.documentElement.dataset['theme'] as Theme;
      if (current === 'light' || current === 'dark') {
        this.theme.set(current);
      }
    });
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    this.doc.documentElement.dataset['theme'] = theme;
    try {
      this.doc.defaultView?.localStorage.setItem('theme', theme);
    } catch {
      /* localStorage indisponível — segue sem persistir */
    }
    this.doc
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f4f1ea' : '#101012');
  }
}
