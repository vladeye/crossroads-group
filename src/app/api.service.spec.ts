import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpHeaders} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";

// Http Options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('expects service to fetch data with proper sorting',
    inject([HttpTestingController, ApiService],
      (httpMock: HttpTestingController, service: ApiService) => {
        // We call the service

      })
  );
});
