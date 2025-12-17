import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMenu } from './v-menu/v-menu';
import { HMenu } from './h-menu/h-menu';
import { SCart } from './s-cart/s-cart';
import { PLogin } from './p-login/p-login';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HMenu, VMenu, SCart, PLogin, Footer],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [PLogin, Footer, HMenu, VMenu, SCart],
})
export class CommonModules {}
