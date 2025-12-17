import { Component } from '@angular/core';

@Component({
  selector: 'app-tenues',
  standalone: false,
  templateUrl: './tenues.html',
  styleUrl: './tenues.scss',
})
export class Tenues {
  showMenu = false;
  showCart = false;
  showLogin = false;
}
