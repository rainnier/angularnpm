import { TestBed } from '@angular/core/testing';

import { NxRainnier123xyLibService } from './nx-rainnier123xy-lib.service';

describe('NxRainnier123xyLibService', () => {
  let service: NxRainnier123xyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxRainnier123xyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
