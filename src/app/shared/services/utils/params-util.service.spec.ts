import { TestBed } from '@angular/core/testing';

import { ParamsUtilService } from './params-util.service';

describe('ParamsUtilService', () => {
    let service: ParamsUtilService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ParamsUtilService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
