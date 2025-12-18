import { Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-h-menu',
  standalone: false,
  templateUrl: './h-menu.html',
  styleUrl: './h-menu.scss',
})
export class HMenu {
  @Output() menu = new EventEmitter<any>();
  @Output() cart = new EventEmitter<any>();
  @Output() heart = new EventEmitter<any>();
  @Output() profile = new EventEmitter<any>();

  openCart() {
    this.cart.emit({
      id: 101,
      message: 'Hello from Template A',
    });
  }

  openMenu() {
    console.log('Menu opened');
    this.menu.emit({
      id: 101,
      message: 'Hello from Template A',
    });
  }
  openProfile() {
    console.log('Profile opened');
    this.profile.emit({
      id: 103,
      message: 'Hello from HMenu Profile',
    });
  }

  openHeart() {
    console.log('Heart opened');
    this.heart.emit({
      id: 104,
      message: 'Hello from HMenu Heart',
    });
  }
  goToHome() {
    window.location.href = '/acceuil';
  }
}
