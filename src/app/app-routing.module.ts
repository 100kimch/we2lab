import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, RoutesRecognized } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'business',
        component: BusinessComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
