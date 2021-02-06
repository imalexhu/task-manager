import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubTaskPageComponent } from './new-sub-task-page.component';

describe('NewSubTaskPageComponent', () => {
  let component: NewSubTaskPageComponent;
  let fixture: ComponentFixture<NewSubTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubTaskPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
