import { TestBed } from '@angular/core/testing';

import { GroupsReferenceService } from './groups-reference.service';

describe('GroupsReferenceService', () => {
    let service: GroupsReferenceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GroupsReferenceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
