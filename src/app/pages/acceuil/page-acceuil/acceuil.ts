import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { After } from 'v8';
//import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  standalone: false,
  selector: 'app-acceuil',
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.scss',
})
export class Acceuil implements AfterViewInit {
  showMenu = false;
  showCart = false;
  showLogin = false;

  @ViewChild('sCart') sCart!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.sCart);
    const width = this.sCart.nativeElement.offsetWidth;
    console.log('Width of sCart:', width);
    document.documentElement.style.setProperty('--s-cart-width', `${width}px`);
  }
  /*
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
*/
  onOpenMenu(event: any) {
    console.log('Data received from HMenu:', event);
    this.showMenu = !this.showMenu;
  }

  onOpenCart(event: any) {
    console.log('Data received from HMenu:', event);
    this.showCart = !this.showCart;
  }
}
