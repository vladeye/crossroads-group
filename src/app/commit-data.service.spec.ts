/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import { CommitDataService } from './commit-data.service';
import { ApiService } from './api.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CommitDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommitDataService,
        ApiService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([CommitDataService], (service: CommitDataService) => {
    expect(service).toBeTruthy();
  }));

});
