import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterationComponent } from './view-registeration.component';

describe('ViewRegisterationComponent', () => {
  let component: ViewRegisterationComponent;
  let fixture: ComponentFixture<ViewRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
