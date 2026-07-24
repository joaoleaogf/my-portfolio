import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo';
import { formatarData, Nota as NotaModel, notaPorSlug } from '../../data/notas';

@Component({
  selector: 'app-nota',
  imports: [RouterLink],
  templateUrl: './nota.html',
  styleUrl: './nota.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nota {
  protected readonly nota: NotaModel | undefined;
  protected readonly formatarData = formatarData;

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';
    this.nota = notaPorSlug(slug);

    if (!this.nota) {
      inject(Router).navigateByUrl('/notas', { replaceUrl: true });
      return;
    }

    inject(SeoService).update({
      title: `${this.nota.title} — João Leão`,
      description: this.nota.summary,
    });
  }
}
