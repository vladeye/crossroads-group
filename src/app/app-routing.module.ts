import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommitsComponent } from './commits/commits.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'commits',
    pathMatch: 'full'
  },
  {
    path: 'commits',
    component: CommitsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
