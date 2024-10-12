import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsachComponent } from './listsach.component';

describe('ListsachComponent', () => {
  let component: ListsachComponent;
  let fixture: ComponentFixture<ListsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
