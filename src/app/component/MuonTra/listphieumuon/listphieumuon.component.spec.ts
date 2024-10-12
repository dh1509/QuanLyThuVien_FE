import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphieumuonComponent } from './listphieumuon.component';

describe('ListphieumuonComponent', () => {
  let component: ListphieumuonComponent;
  let fixture: ComponentFixture<ListphieumuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListphieumuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphieumuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
