/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommitListItemComponent } from './commit-list-item.component';
import { Commit } from '../commit';

describe('CommitListItemComponent', () => {
  let component: CommitListItemComponent;
  let fixture: ComponentFixture<CommitListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
