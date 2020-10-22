import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupsReferenceComponent } from './create-groups-reference.component';

describe('CreateGroupsReferenceComponent', () => {
    let component: CreateGroupsReferenceComponent;
    let fixture: ComponentFixture<CreateGroupsReferenceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateGroupsReferenceComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateGroupsReferenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
