import { Injectable } from '@angular/core';
import { Commit } from './commit';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class CommitDataService {

  constructor(
    private api: ApiService
  ) {
  }

  /**
   * // CommitDataService: comment handleError
   * Handles the errors from this class's functionality
   * @returns An error
   */
  getCommitsFromServer(): Observable<Commit> {
    return this.api.getCommitsFromServer();
  }


}
