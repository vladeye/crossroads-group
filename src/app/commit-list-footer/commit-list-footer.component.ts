import { Component, Input } from '@angular/core';
import { Commit } from '../commit';

@Component({
  selector: 'app-commit-list-footer',
  templateUrl: 'commit-list-footer.component.html',
  styleUrls: ['commit-list-footer.component.css']
})
export class CommitListFooterComponent {

  /**
   * Variable to hold an array of commits.
   */
  @Input()
  commits: Commit[];

  constructor() {
  }

}
