import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from "../bottom-nav/bottom-nav.component";

@Component({
  selector: 'app-base-layout',
  imports: [RouterOutlet, BottomNavComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {

}
