import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfBtnComponent } from './adf-btn.component';

describe('AdfBtnComponent', () => {
  let component: AdfBtnComponent;
  let fixture: ComponentFixture<AdfBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdfBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdfBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
