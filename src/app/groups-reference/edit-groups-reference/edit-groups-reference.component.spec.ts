import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupsReferenceComponent } from './edit-groups-reference.component';

describe('EditGroupsReferenceComponent', () => {
    let component: EditGroupsReferenceComponent;
    let fixture: ComponentFixture<EditGroupsReferenceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditGroupsReferenceComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditGroupsReferenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
