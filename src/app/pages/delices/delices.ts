import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delices',
  standalone: false,
  templateUrl: './delices.html',
  styleUrl: './delices.scss',
})
export class Delices {
  showMenu = false;
  showCart = false;
  showLogin = false;

  @ViewChild('sCart') sCart!: ElementRef<HTMLDivElement>;

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

  showInfo = false;

  boiteDorer = {
    ref: 'boite-dorer',
    name: '10 PCS DELICES',
    price: 40,
    image: 'https://kahina.ca/produits/pages/delices/boite_dorer.png',
    description: `
      Un met typiquement Algérien fait à base de semoule,
      nourri de matière grasse végétale, fourré d’un mélange
      amande, sucre et fleur d’oranger, frit puis plongé
      dans un sirop. Bonne dégustation.
    `,
  };

  boiteRouge = {
    ref: 'boite-rouge',
    name: '5 PCS DELICES',
    price: 21,
    image: 'https://kahina.ca/produits/pages/delices/boite_rouge.png',
    description: `
      Un met typiquement Algérien fait à base de semoule,
      nourri de matière grasse végétale, fourré d’un mélange
      amande, sucre et fleur d’oranger, frit puis plongé
      dans un sirop. Bonne dégustation.
    `,
    showInfo: false,
  };

  boiteMakrout = {
    ref: 'boite-makrout',
    name: '6 PCS MAKROUTES',
    price: 18,
    image: 'https://kahina.ca/images/delices.png',
    description: `
      Un met typiquement Algérien fait à base de semoule,
      nourri de matière grasse végétale, fourré d’un mélange
      amande, sucre et fleur d’oranger, frit puis plongé
      dans un sirop. Bonne dégustation.
    `,
    showInfo: false,
  };

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.sCart);
    const width = this.sCart.nativeElement.offsetWidth;
    console.log('Width of sCart:', width);
    document.documentElement.style.setProperty('--s-cart-width', `${width}px`);
  }

  addToCart(product: any) {
    console.log('Add to cart:', product);
  }
}
