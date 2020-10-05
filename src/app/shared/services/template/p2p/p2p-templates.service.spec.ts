import { TestBed } from '@angular/core/testing';

import { P2pTemplatesService } from './p2p-templates.service';

describe('P2pTemplatesService', () => {
  let service: P2pTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P2pTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
