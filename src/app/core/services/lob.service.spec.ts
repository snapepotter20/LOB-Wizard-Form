import { TestBed } from '@angular/core/testing';

import { LobService } from './lob.service';

describe('LobService', () => {
  let service: LobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
