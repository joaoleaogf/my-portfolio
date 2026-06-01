import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo';
import { RevealDirective } from '../../shared/reveal';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Projects } from '../../sections/projects/projects';
import { Skills } from '../../sections/skills/skills';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [RevealDirective, Hero, About, Projects, Skills, Contact],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  constructor() {
    inject(SeoService).update({
      title: 'João Leão — Desenvolvedor de Software',
      description:
        'Portfólio de João Leão — desenvolvedor de software em Itajubá-MG, focado em backend, pipelines de ETL, BI e geoprocessamento.',
    });
  }
}
