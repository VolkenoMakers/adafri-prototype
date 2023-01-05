import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfInputComponent } from './adf-input.component';

describe('AdfInputComponent', () => {
  let component: AdfInputComponent;
  let fixture: ComponentFixture<AdfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdfInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
