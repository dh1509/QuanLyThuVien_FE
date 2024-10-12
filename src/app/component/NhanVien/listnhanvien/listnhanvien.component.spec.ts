import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnhanvienComponent } from './listnhanvien.component';

describe('ListnhanvienComponent', () => {
  let component: ListnhanvienComponent;
  let fixture: ComponentFixture<ListnhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnhanvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
