import { TestBed } from '@angular/core/testing';

import { OperationTypeManagementService } from './operation-type-management.service';

describe('OperationTypeManagementService', () => {
  let service: OperationTypeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationTypeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
