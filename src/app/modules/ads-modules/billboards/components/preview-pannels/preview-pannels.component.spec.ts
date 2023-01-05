import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPannelsComponent } from './preview-pannels.component';

describe('PreviewPannelsComponent', () => {
  let component: PreviewPannelsComponent;
  let fixture: ComponentFixture<PreviewPannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewPannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
