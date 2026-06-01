import {
  afterNextRender,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';

/**
 * Substitui o <Reveal> (framer-motion) do projeto React.
 * Adiciona a classe `.reveal` e, quando o elemento entra na viewport,
 * `.active` — animação definida em styles.css. Só roda no browser, então
 * o HTML pré-renderizado (SSG) já sai visível para crawlers e no-JS.
 */
@Directive({
  selector: '[reveal]',
})
export class RevealDirective implements OnDestroy {
  /** Atraso em ms para escalonar (stagger) elementos de uma grade. */
  @Input() revealDelay = 0;

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement as HTMLElement;
      if (this.revealDelay) {
        el.style.transitionDelay = `${this.revealDelay}ms`;
      }
      el.classList.add('reveal');

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('active');
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0.1, rootMargin: '-75px' },
      );
      this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
