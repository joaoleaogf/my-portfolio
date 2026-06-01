import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly doc = inject(DOCUMENT);

  protected scrollToContact(): void {
    this.doc.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.parentElement?.classList.add('is-empty');
  }
}
