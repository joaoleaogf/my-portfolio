import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);

  protected readonly currentYear = new Date().getFullYear();

  protected scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(
          () => this.doc.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }),
          100,
        );
      });
      return;
    }
    this.doc.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
