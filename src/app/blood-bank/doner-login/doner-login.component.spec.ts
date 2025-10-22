import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerLoginComponent } from './doner-login.component';

describe('DonerLoginComponent', () => {
  let component: DonerLoginComponent;
  let fixture: ComponentFixture<DonerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
