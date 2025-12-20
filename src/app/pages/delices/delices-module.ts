import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModules } from '../../common/common-modules';
import { Delices } from './delices';

@NgModule({
  declarations: [Delices],
  imports: [CommonModule, CommonModules, RouterModule, FormsModule, BrowserAnimationsModule],
})
export class DelicesModule {}
