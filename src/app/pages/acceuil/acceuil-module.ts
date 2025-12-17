import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acceuil } from './page-acceuil/acceuil';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HMenu } from '../../common/h-menu/h-menu';

@NgModule({
  declarations: [Acceuil, HMenu],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AcceuilModule {}
