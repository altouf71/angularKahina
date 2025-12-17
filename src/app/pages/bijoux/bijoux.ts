import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bijoux',
  standalone: false,
  templateUrl: './bijoux.html',
  styleUrl: './bijoux.scss',
})
export class Bijoux {
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
}
