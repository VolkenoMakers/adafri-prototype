import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRadioComponent } from './create-radio.component';

describe('CreateRadioComponent', () => {
  let component: CreateRadioComponent;
  let fixture: ComponentFixture<CreateRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
