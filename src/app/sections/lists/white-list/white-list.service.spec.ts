import { TestBed } from '@angular/core/testing';

import { WhiteListService } from './white-list.service';

describe('WhiteListService', () => {
    let service: WhiteListService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WhiteListService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
