import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotRegistrationFormComponent } from './slot-registration-form.component';

describe('SlotRegistrationFormComponent', () => {
  let component: SlotRegistrationFormComponent;
  let fixture: ComponentFixture<SlotRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
