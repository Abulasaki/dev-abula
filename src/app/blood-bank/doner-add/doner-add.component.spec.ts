import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerAddComponent } from './doner-add.component';

describe('DonerAddComponent', () => {
  let component: DonerAddComponent;
  let fixture: ComponentFixture<DonerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
