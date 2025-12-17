import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from '../../common/common-modules';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Tenues } from './tenues';

@NgModule({
  imports: [CommonModule, CommonModules, RouterModule, FormsModule, BrowserAnimationsModule],
  declarations: [Tenues],
})
export class TenuesModule {}
