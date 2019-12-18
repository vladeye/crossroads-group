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

          this.connection = this.commitDataService.getCommitsFromServer().subscribe(data => {
              console.log('inside ngOnInit()');
            /**
             * Assign every commit to an object creating an array of commits
             */
              data.forEach(item => {
                console.log(item.commit);
                this.commits.push(new Commit(item.commit));
              });
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
