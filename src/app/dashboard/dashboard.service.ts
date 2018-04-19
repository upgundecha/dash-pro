import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Application} from './application';
import {Observable} from 'rxjs';

@Injectable()
export class ApplicationService {

  private applicationListUrl = "http://127.0.0.1:9000/api/v1/applications/";

  constructor(private _http: Http) { }

  getApplications(): Observable<Application[]> {
    return this._http.get(this.applicationListUrl)
      .map((response: Response) => <Application[]> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
