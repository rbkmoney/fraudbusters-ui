import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGroupDialogComponent } from './remove-group-dialog.component';

describe('RemoveGroupDialogComponent', () => {
  let component: RemoveGroupDialogComponent;
  let fixture: ComponentFixture<RemoveGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveGroupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
