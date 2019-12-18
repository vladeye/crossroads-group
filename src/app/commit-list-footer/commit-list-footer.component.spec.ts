/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommitListFooterComponent } from './commit-list-footer.component';
import { Commit } from '../commit';

describe('CommitListFooterComponent', () => {
  let component: CommitListFooterComponent;
  let fixture: ComponentFixture<CommitListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitListFooterComponent);
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
