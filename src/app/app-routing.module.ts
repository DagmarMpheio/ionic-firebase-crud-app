import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-contact',
    pathMatch: 'full'
  },
  {
    path: 'create-contact',
    loadChildren: () => import('./pages/create-contact/create-contact.module').then(m => m.CreateContactPageModule)
  },
  {
    path: 'update-contact/:id',
    loadChildren: () => import('./pages/update-contact/update-contact.module').then(m => m.UpdateContactPageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact-list/contact-list.module').then(m => m.ContactListPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
