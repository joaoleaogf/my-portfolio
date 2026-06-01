import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { MapComponent } from './map';

@Component({
  selector: 'app-contact',
  imports: [MapComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}
