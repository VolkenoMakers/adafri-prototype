import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinAdsComponent } from './linkedin-ads.component';

describe('LinkedinAdsComponent', () => {
  let component: LinkedinAdsComponent;
  let fixture: ComponentFixture<LinkedinAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
