import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktabComponent } from './marktab.component';

describe('MarktabComponent', () => {
  let component: MarktabComponent;
  let fixture: ComponentFixture<MarktabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
