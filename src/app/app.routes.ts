import { Routes } from '@angular/router';
import { Acceuil } from './pages/acceuil/page-acceuil/acceuil';
import { Bijoux } from './pages/bijoux/bijoux';
import { Tenues } from './pages/tenues/tenues';
import path from 'path';
import { Delices } from './pages/delices/delices';

export const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: Acceuil },
  { path: 'bijoux', component: Bijoux },
  { path: 'tenues', component: Tenues },
  { path: 'delices', component: Delices },
];
