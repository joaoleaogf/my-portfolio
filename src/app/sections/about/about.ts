import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  education,
  experience,
  Experience,
  formatDuration,
  specialties,
} from '../../data/skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly specialties = specialties;

  protected duration(exp: Experience): string {
    return formatDuration(exp);
  }
}
