import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Commit } from '../commit';

@Component({
  selector: 'app-commit-list-item',
  templateUrl: 'commit-list-item.component.html',
  styleUrls: ['commit-list-item.component.css']
})
export class CommitListItemComponent {

  /**
   * Variable to hold a commits.
   */
  @Input() commit: Commit;


  constructor() {
  }


}
