import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acceuil } from './page-acceuil/acceuil';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HMenu } from '../../common/h-menu/h-menu';
import { VMenu } from '../../common/v-menu/v-menu';
import { SCart } from '../../common/s-cart/s-cart';
import { PLogin } from '../../common/p-login/p-login';
import { Footer } from '../../common/footer/footer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModules } from '../../common/common-modules';

@NgModule({
  declarations: [Acceuil],
  imports: [CommonModule, CommonModules, RouterModule, FormsModule, BrowserAnimationsModule],
})
export class AcceuilModule {}
