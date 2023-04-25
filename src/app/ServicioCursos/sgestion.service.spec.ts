import { TestBed } from '@angular/core/testing';

import { SGestionService } from './sgestion.service';

describe('SGestionService', () => {
  let service: SGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
