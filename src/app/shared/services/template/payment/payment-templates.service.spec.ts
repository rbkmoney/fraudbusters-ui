import { TestBed } from '@angular/core/testing';

import { PaymentTemplatesService } from './payment-templates.service';

describe('PaymentTemplatesService', () => {
  let service: PaymentTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
