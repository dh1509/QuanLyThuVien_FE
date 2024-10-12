import { TestBed } from '@angular/core/testing';

import { MuontraService } from './muontra.service';

describe('MuontraService', () => {
  let service: MuontraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuontraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
