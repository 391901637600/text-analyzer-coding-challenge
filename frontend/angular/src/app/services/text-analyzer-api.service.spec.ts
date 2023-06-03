import {TestBed} from '@angular/core/testing';

import {TextAnalyzerApiService} from './text-analyzer-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";

describe('TextAnalyzerService', () => {
  let service: TextAnalyzerApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TextAnalyzerApiService]
    });

    service = TestBed.inject(TextAnalyzerApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
