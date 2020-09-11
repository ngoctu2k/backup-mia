import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTableComponent } from './shared-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SharedTableComponent', () => {
  let component: SharedTableComponent;
  let fixture: ComponentFixture<SharedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTableComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
