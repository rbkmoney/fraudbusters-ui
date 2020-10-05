import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTemplateDialogComponent } from './remove-template-dialog.component';

describe('RemoveTemplateDialogComponent', () => {
  let component: RemoveTemplateDialogComponent;
  let fixture: ComponentFixture<RemoveTemplateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTemplateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
