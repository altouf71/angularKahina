import { Routes } from '@angular/router';
import { Acceuil } from './pages/acceuil/page-acceuil/acceuil';
import { Bijoux } from './pages/bijoux/bijoux';
import { Tenues } from './pages/tenues/tenues';

export const routes: Routes = [
  { path: 'acceuil', component: Acceuil },
  { path: 'bijoux', component: Bijoux },
  { path: 'tenues', component: Tenues },
];
