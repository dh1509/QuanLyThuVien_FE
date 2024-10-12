import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesachComponent } from './updatesach.component';

describe('UpdatesachComponent', () => {
  let component: UpdatesachComponent;
  let fixture: ComponentFixture<UpdatesachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
