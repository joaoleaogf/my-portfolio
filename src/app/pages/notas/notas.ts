import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo';
import { RevealDirective } from '../../shared/reveal';
import { formatarData, notasOrdenadas } from '../../data/notas';

@Component({
  selector: 'app-notas',
  imports: [RouterLink, RevealDirective],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notas {
  protected readonly notas = notasOrdenadas();
  protected readonly formatarData = formatarData;

  constructor() {
    inject(SeoService).update({
      title: 'Notas — João Leão',
      description:
        'Anotações sobre coisas que construí: pipelines de dados, automações e experimentos que renderam alguma lição.',
    });
  }
}
