import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUssdComponent } from './create-ussd.component';

describe('CreateUssdComponent', () => {
  let component: CreateUssdComponent;
  let fixture: ComponentFixture<CreateUssdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUssdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
