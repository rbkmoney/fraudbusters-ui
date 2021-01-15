import { TestBed } from '@angular/core/testing';

import { GroupUtilsService } from './group-utils.service';

describe('GroupUtilsService', () => {
    let service: GroupUtilsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GroupUtilsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
