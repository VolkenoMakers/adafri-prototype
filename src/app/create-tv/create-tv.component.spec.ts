import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTvComponent } from './create-tv.component';

describe('CreateTvComponent', () => {
  let component: CreateTvComponent;
  let fixture: ComponentFixture<CreateTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
