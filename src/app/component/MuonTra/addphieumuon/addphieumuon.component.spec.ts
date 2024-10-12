import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphieumuonComponent } from './addphieumuon.component';

describe('AddphieumuonComponent', () => {
  let component: AddphieumuonComponent;
  let fixture: ComponentFixture<AddphieumuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddphieumuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphieumuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
