import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsReferenceComponent } from './groups-reference.component';

describe('GroupsReferenceComponent', () => {
    let component: GroupsReferenceComponent;
    let fixture: ComponentFixture<GroupsReferenceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GroupsReferenceComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupsReferenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
