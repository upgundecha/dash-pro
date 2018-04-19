import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationService } from './application.service';
import { ApplicationRoutingModule } from './application-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  declarations: [ApplicationListComponent],
  providers: [ApplicationService]
})
export class ApplicationModule { }
