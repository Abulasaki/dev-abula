import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodnavComponent } from './bloodnav.component';

describe('BloodnavComponent', () => {
  let component: BloodnavComponent;
  let fixture: ComponentFixture<BloodnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
