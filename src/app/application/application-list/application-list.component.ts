import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../application.service';
import {Application} from '../application';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  errorMessage: string;
  applications: Application[];

  constructor(private router: Router, private applicationService: ApplicationService) { }

   ngOnInit() {
    this.applicationService.getApplications().subscribe(
      applications => this.applications = applications,
      error => this.errorMessage = <any> error);
  }

  onSelect(application: Application) {
    this.router.navigate(['/dashboard', application.name]);
  }


}
