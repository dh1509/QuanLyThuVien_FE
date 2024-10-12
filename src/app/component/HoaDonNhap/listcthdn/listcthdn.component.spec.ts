import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcthdnComponent } from './listcthdn.component';

describe('ListcthdnComponent', () => {
  let component: ListcthdnComponent;
  let fixture: ComponentFixture<ListcthdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcthdnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcthdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
