import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhoadonnhapComponent } from './addhoadonnhap.component';

describe('AddhoadonnhapComponent', () => {
  let component: AddhoadonnhapComponent;
  let fixture: ComponentFixture<AddhoadonnhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhoadonnhapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhoadonnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
