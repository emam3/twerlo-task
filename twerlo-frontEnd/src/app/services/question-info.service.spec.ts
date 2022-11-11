import { TestBed } from '@angular/core/testing';

import { QuestionInfoService } from './question-info.service';

describe('QuestionInfoService', () => {
  let service: QuestionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
