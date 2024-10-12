import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListctphieumuonComponent } from './listctphieumuon.component';

describe('ListctphieumuonComponent', () => {
  let component: ListctphieumuonComponent;
  let fixture: ComponentFixture<ListctphieumuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListctphieumuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListctphieumuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
