import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudUploaderComponent } from './fraud-uploader.component';

describe('FraudUploaderComponent', () => {
    let component: FraudUploaderComponent;
    let fixture: ComponentFixture<FraudUploaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FraudUploaderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FraudUploaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
