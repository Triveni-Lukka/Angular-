import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcurdComponent } from './formcurd.component';

describe('FormcurdComponent', () => {
  let component: FormcurdComponent;
  let fixture: ComponentFixture<FormcurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
