import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commit } from './commit';

import {environment} from "../environments/environment";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';




interface CommitResponse {
  mycommits: Commit[];
}

@Injectable()
export class ApiService {
  // Define API
  apiURL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /**
   * // ApiService: comment getCommitsFromServer
   * Gets commits from github
   * @returns Array of commits
   */
  public getCommitsFromServer(): Observable<Commit> {
      return this.http.get<Commit>(this.apiURL + '/repos/vladeye/twitter-test-front/commits')
        .pipe(
          retry(1),
          catchError(this.handleError)
      )
  }

  /**
   * // ApiService: comment handleError
   * Handles the errors from this class's functionality
   * @returns An error
   */
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
