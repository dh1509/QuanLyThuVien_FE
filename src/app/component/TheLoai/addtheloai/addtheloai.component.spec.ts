import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtheloaiComponent } from './addtheloai.component';

describe('AddtheloaiComponent', () => {
  let component: AddtheloaiComponent;
  let fixture: ComponentFixture<AddtheloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtheloaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtheloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
