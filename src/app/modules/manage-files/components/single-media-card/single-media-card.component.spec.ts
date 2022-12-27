import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMediaCardComponent } from './single-media-card.component';

describe('SingleMediaCardComponent', () => {
  let component: SingleMediaCardComponent;
  let fixture: ComponentFixture<SingleMediaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMediaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
