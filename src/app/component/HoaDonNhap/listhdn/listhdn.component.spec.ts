import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhdnComponent } from './listhdn.component';

describe('ListhdnComponent', () => {
  let component: ListhdnComponent;
  let fixture: ComponentFixture<ListhdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhdnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
