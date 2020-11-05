import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulationTemplateComponent } from './emulation-template.component';

describe('TemplateComponent', () => {
    let component: EmulationTemplateComponent;
    let fixture: ComponentFixture<EmulationTemplateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmulationTemplateComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmulationTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
