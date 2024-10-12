import { TestBed } from '@angular/core/testing';

import { NgonnguService } from './ngonngu.service';

describe('NgonnguService', () => {
  let service: NgonnguService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgonnguService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
