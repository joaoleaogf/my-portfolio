import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { projects } from '../../data/projects';
import { ProjectCard } from './project-card';
import { RevealDirective } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly filters = ['Python', 'Node.js', 'ETL', 'PostGIS', 'API'];
  protected readonly filter = signal<string>('all');

  protected readonly filteredProjects = computed(() => {
    const active = this.filter();
    return active === 'all'
      ? projects
      : projects.filter((p) => p.technologies.includes(active));
  });

  protected setFilter(value: string): void {
    this.filter.set(value);
  }
}
