import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveHomeComponent } from './hive-home.component';

describe('HiveHomeComponent', () => {
  let component: HiveHomeComponent;
  let fixture: ComponentFixture<HiveHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
