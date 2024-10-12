import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtheloaiComponent } from './listtheloai.component';

describe('ListtheloaiComponent', () => {
  let component: ListtheloaiComponent;
  let fixture: ComponentFixture<ListtheloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtheloaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtheloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
