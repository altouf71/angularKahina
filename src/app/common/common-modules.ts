import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMenu } from './v-menu/v-menu';
import { HMenu } from './h-menu/h-menu';
import { SCart } from './s-cart/s-cart';
import { PLogin } from './p-login/p-login';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Gallery } from './gallery/gallery';
import { DelicesProduits, SafeUrlPipe } from '../pages/delices/delices-produits';

@NgModule({
  declarations: [HMenu, VMenu, SCart, PLogin, Footer, Gallery, DelicesProduits],
  imports: [CommonModule, RouterModule, FormsModule, SafeUrlPipe],
  exports: [PLogin, Footer, HMenu, VMenu, SCart, Gallery, DelicesProduits],
})
export class CommonModules {}
