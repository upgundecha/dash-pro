import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ApplicationListComponent} from './application-list/application-list.component';

const applicationRoutes: Routes = [
  {path: '', component: ApplicationListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(applicationRoutes)],
  exports: [RouterModule]
})

export class ApplicationRoutingModule {
}