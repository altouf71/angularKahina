import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  galleryItems = [
    {
      title: 'Poterie Traditionnel',
      image: 'assets/images/pottery.png',
      alt: 'Pottery',
      route: '/pottery',
    },
    {
      title: 'Bijoux Traditionnel',
      image: 'assets/images/jewelry.png',
      alt: 'Jewelry',
      route: '/bijoux',
    },
    {
      title: 'Tapis Berbere',
      image: 'assets/images/tapis.png',
      alt: 'Tapis',
      route: '/tapis',
    },
    {
      title: 'Delices Traditionnel',
      image: 'assets/images/delices.png',
      alt: 'Delices',
      route: '/delices',
    },
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
