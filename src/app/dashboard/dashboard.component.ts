import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

export type Source = {
  id: number,
  name: string, 
  amount: number,
}

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  incomeSources: Array<Source> = [
    {
      id: 1,
      name: 'e-wallet',
      amount: 1200
    },
    {
      id: 2,
      name: 'bank',
      amount: 12000,
    },
    {
      id: 3,
      name: 'cash',
      amount: 2500
    }
  ]
}
