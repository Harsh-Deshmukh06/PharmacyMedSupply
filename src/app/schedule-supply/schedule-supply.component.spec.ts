import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSupplyComponent } from './schedule-supply.component';

describe('ScheduleSupplyComponent', () => {
  let component: ScheduleSupplyComponent;
  let fixture: ComponentFixture<ScheduleSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
