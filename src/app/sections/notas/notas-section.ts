import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formatarData, notasOrdenadas } from '../../data/notas';
import { RevealDirective } from '../../shared/reveal';

@Component({
  selector: 'app-notas-section',
  imports: [RouterLink, RevealDirective],
  templateUrl: './notas-section.html',
  styleUrl: './notas-section.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotasSection {
  /** Só as mais recentes; a lista completa vive em /notas. */
  protected readonly notas = notasOrdenadas().slice(0, 2);
  protected readonly formatarData = formatarData;
}
