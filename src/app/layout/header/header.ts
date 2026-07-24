import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/theme';

interface NavItem {
  id: string;
  label: string;
  /** Quando presente, o item navega para uma rota em vez de rolar até a seção. */
  route?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);

  protected readonly theme = this.themeService.theme;

  protected readonly isScrolled = signal(false);
  private readonly activeSection = signal('home');
  protected readonly mobileMenuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'notas', label: 'Notas', route: '/notas' },
    { id: 'contact', label: 'Contato' },
  ];

  private readonly sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

  constructor() {
    afterNextRender(() => this.onScroll());
  }

  private get isHomePage(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const win = this.doc.defaultView;
    if (!win) return;
    this.isScrolled.set(win.scrollY > 50);

    if (!this.isHomePage) return;

    let current = 'home';
    for (const id of this.sectionIds) {
      const el = this.doc.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= 150) current = id;
      }
    }
    this.activeSection.set(current);
  }

  protected isActive(item: NavItem): boolean {
    if (item.route) return this.router.url.startsWith(item.route);
    return this.isHomePage && this.activeSection() === item.id;
  }

  protected navigate(item: NavItem): void {
    this.mobileMenuOpen.set(false);

    if (item.route) {
      this.router.navigateByUrl(item.route);
      return;
    }

    if (!this.isHomePage) {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollTo(item.id), 100);
      });
      return;
    }
    this.scrollTo(item.id);
  }

  private scrollTo(sectionId: string): void {
    this.doc.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
