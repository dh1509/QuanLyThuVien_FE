import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsachComponent } from './addsach.component';

describe('AddsachComponent', () => {
  let component: AddsachComponent;
  let fixture: ComponentFixture<AddsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
