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

interface NavItem {
  id: string;
  label: string;
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

  protected readonly isScrolled = signal(false);
  private readonly activeSection = signal('home');
  protected readonly mobileMenuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
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

  protected isActive(id: string): boolean {
    return this.isHomePage && this.activeSection() === id;
  }

  protected navigate(sectionId: string): void {
    this.mobileMenuOpen.set(false);

    if (!this.isHomePage) {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollTo(sectionId), 100);
      });
      return;
    }
    this.scrollTo(sectionId);
  }

  private scrollTo(sectionId: string): void {
    this.doc.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }
}
