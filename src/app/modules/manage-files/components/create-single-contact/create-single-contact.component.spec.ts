import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleContactComponent } from './create-single-contact.component';

describe('CreateSingleContactComponent', () => {
  let component: CreateSingleContactComponent;
  let fixture: ComponentFixture<CreateSingleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSingleContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSingleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
