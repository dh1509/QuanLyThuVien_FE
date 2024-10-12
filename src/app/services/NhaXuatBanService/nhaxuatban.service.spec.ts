import { TestBed } from '@angular/core/testing';

import { NhaxuatbanService } from './nhaxuatban.service';

describe('NhaxuatbanService', () => {
  let service: NhaxuatbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhaxuatbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
