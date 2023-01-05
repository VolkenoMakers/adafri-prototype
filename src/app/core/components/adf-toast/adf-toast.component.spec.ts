import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfToastComponent } from './adf-toast.component';

describe('AdfToastComponent', () => {
  let component: AdfToastComponent;
  let fixture: ComponentFixture<AdfToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdfToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdfToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
