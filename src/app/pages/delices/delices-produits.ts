import { Component } from '@angular/core';

@Component({
  selector: 'app-delices-produits',
  standalone: false,
  templateUrl: './delices-produits.html',
  styleUrl: './delices-produits.scss',
})
export class DelicesProduits {
  selectedVideo: string | null = null;

  products = [
    {
      ref: 'ref_1',
      name: 'DZIRIATTES',
      price: 4,
      image: 'https://kahina.ca/produits/produits-local/delices/dziriattes.png',
      videoUrl: 'https://www.youtube.com/embed/O1rs0NkW85U',
    },
    {
      ref: 'ref_2',
      name: 'MAKROUT AUX AMANDES',
      price: 4,
      image: 'https://kahina.ca/produits/produits-local/delices/makroute_2.png',
      videoUrl: 'https://www.youtube.com/embed/R0LuKMtg6mg',
    },
    {
      ref: 'ref_3',
      name: 'MCHOUEK',
      price: 4,
      image: 'https://kahina.ca/produits/produits-local/delices/mchoeka.png',
      videoUrl: 'https://www.youtube.com/embed/upSYh2IGOPE',
    },
    {
      ref: 'ref_4',
      name: 'BAKLAWA',
      price: 5,
      image: 'https://kahina.ca/produits/produits-local/delices/baklava.png',
      videoUrl: 'https://www.youtube.com/embed/ZnJkXNmfbgY',
    },
    {
      ref: 'ref_5',
      name: 'MAKROUT EL LOUZE',
      price: 5,
      image: 'https://kahina.ca/produits/produits-local/delices/makroute_et_louze.png',
      videoUrl: 'https://www.youtube.com/embed/UAcC-ujF45Y',
    },
    {
      ref: 'ref_6',
      name: 'TCHAREK EL AARYANE',
      price: 4,
      image: 'https://kahina.ca/produits/produits-local/delices/charek_el_aaryane.png',
      videoUrl: 'https://www.youtube.com/embed/R0LuKMtg6mg',
    },
  ];

  selectVideo(url: string) {
    this.selectedVideo = url;
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
