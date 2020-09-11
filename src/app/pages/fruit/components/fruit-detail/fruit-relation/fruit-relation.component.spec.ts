/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FruitRelationComponent } from './fruit-relation.component';

describe('FruitRelationComponent', () => {
  let component: FruitRelationComponent;
  let fixture: ComponentFixture<FruitRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
