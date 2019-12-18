/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import { CommitDataService } from './commit-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from "./api-mock.service";

describe('CommitDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommitDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([CommitDataService], (service: CommitDataService) => {
    expect(service).toBeTruthy();
  }));

});
