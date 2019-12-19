import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsComponent} from './commits.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommitDataService } from '../commit-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommitsComponent],
      providers: [
        ApiService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              commits: []
            })
          }
        }
      ],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
