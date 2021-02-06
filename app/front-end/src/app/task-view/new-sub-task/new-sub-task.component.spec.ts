import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubTaskComponent } from './new-sub-task.component';

describe('NewSubTaskComponent', () => {
  let component: NewSubTaskComponent;
  let fixture: ComponentFixture<NewSubTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
