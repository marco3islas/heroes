import { TestBed } from '@angular/core/testing';

import { MarvelAppService } from './marvel-app.service';

describe('MarvelAppService', () => {
  let service: MarvelAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
