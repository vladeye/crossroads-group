import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommitDataService } from '../commit-data.service';
import { Commit } from '../commit';

@Component({
  selector: 'app-commits',
  templateUrl: 'commits.component.html',
  styleUrls: ['commits.component.css'],
  providers: [CommitDataService]
})
export class CommitsComponent implements OnInit, OnDestroy {

  /**
   * Variable to hold an array of commits.
   */
    commits: Commit[] = [];
    connection: any;

    constructor(
    private commitDataService: CommitDataService
    ) {
    }

    /**
     * // CommitsComponent: comment ngOnInit
     * Handles the errors from this class's functionality
     */
      public ngOnInit() {

          this.connection = this.commitDataService.getCommitsFromServer().subscribe(commit => {
              console.log('inside ngOnInit()');
              console.log(commit);
              this.commits = this.commits.concat(commit);
          })
      }



    /**
     * // CommitsComponent: comment ngOnDestroy
     * Unsubscribes from the connection
     */
      ngOnDestroy() {
            this.connection.unsubscribe();
        }
}
