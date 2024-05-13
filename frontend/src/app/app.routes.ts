import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path:"", 
    loadComponent: () => 
    import('./home/home.component').then((c) => c.HomeComponent)},
    {path:"detail/:id",
    loadComponent: () => 
    import('./detail/detail.component').then((c) => c.DetailComponent),
    }
];
