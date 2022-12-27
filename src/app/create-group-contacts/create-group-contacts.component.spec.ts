import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupContactsComponent } from './create-group-contacts.component';

describe('CreateGroupContactsComponent', () => {
  let component: CreateGroupContactsComponent;
  let fixture: ComponentFixture<CreateGroupContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroupContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
