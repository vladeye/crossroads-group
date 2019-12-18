import { Component, Output, EventEmitter } from '@angular/core';
import { Commit } from '../commit';

@Component({
  selector: 'app-commit-list-header',
  templateUrl: 'commit-list-header.component.html',
  styleUrls: ['commit-list-header.component.css']
})
export class CommitListHeaderComponent {

  newCommit: Commit = new Commit();

  @Output()
  add: EventEmitter<string> = new EventEmitter();

  constructor() {
  }


}
