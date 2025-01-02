import { Component, input, Input } from '@angular/core';
import { Source } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() source!:Source; 
}
