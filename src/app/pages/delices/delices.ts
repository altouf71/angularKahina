import { Component } from '@angular/core';

@Component({
  selector: 'app-delices',
  standalone: false,
  templateUrl: './delices.html',
  styleUrl: './delices.scss',
})
export class Delices {
  socials = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/https.kahina.ca',
      icon: '/assets/icons/instagram_logo_gray.png',
    },
    { name: 'TikTok', url: 'https://tiktok.com/@kahina.ca', icon: '/assets/icons/tiktok.png' },
    {
      name: 'Facebook',
      url: 'https://facebook.com/https.kahina.ca',
      icon: '/assets/icons/facebook.png',
    },
  ];

  heroBoxes = [
    {
      ref: 'boite-doree',
      name: '10 PCS DELICES',
      price: 40,
      image: '/assets/produits/pages/delices/boite_doree.png',
      description: 'Un met typiquement Algérien...',
      showInfo: false,
    },
    {
      ref: 'boite-rouge',
      name: '5 PCS DELICES',
      price: 21,
      image: '/assets/produits/pages/delices/boite_rouge.png',
      description: 'Un met typiquement Algérien...',
      showInfo: false,
    },
  ];

  products = [
    {
      ref: 'dziriattes',
      name: 'DZIRIATTES',
      price: 4,
      image: './assets/produits/produits-local/delices/dziriattes.png',
      video: 'https://www.youtube.com/embed/O1rs0NkW85U',
    },
    {
      ref: 'makrout',
      name: 'MAKROUT AUX AMANDES',
      price: 4,
      image: '/assets/produits/produits-local/delices/makroute.png',
      video: 'https://www.youtube.com/embed/R0LuKMtg6mg',
    },
  ];

  currentVideo = this.products[0].video;

  playVideo(url: string) {
    this.currentVideo = url;
  }

  addToCart(product: any) {
    console.log('Add to cart:', product);
  }
}
