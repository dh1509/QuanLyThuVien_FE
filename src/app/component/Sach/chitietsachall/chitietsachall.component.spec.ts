import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsachallComponent } from './chitietsachall.component';

describe('ChitietsachallComponent', () => {
  let component: ChitietsachallComponent;
  let fixture: ComponentFixture<ChitietsachallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietsachallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietsachallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
