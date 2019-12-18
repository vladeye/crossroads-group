import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Commit } from '../commit';

@Component(
  {
    selector: 'app-commit-list',
    templateUrl: 'commit-list.component.html',
    styleUrls: ['commit-list.component.css']
  }
)
export class CommitListComponent {

  /**
   * Variable to hold an array of commits.
   */
  @Input()
  commits: Commit[];

  constructor() {
  }

}
