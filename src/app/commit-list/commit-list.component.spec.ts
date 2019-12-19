/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommitListComponent } from './commit-list.component';
import { Commit } from '../commit';

describe('CommitListComponent', () => {
  let component: CommitListComponent;
  let fixture: ComponentFixture<CommitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitListComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitListComponent);
    component = fixture.componentInstance;
    component.commits = [
     new Commit({ id: 1, title: 'Test', complete: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
