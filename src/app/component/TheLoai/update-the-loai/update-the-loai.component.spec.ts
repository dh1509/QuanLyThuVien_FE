import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheLoaiComponent } from './update-the-loai.component';

describe('UpdateTheLoaiComponent', () => {
  let component: UpdateTheLoaiComponent;
  let fixture: ComponentFixture<UpdateTheLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTheLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTheLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
