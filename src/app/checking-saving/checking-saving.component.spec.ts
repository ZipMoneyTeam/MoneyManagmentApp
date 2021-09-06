import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingSavingComponent } from './checking-saving.component';

describe('CheckingSavingComponent', () => {
  let component: CheckingSavingComponent;
  let fixture: ComponentFixture<CheckingSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingSavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
