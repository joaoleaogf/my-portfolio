import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { skillsCategories } from '../../data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skillsCategories = skillsCategories;
}
