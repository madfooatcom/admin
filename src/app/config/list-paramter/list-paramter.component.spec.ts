/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListParamterComponent } from './list-paramter.component';

describe('ListParamterComponent', () => {
  let component: ListParamterComponent;
  let fixture: ComponentFixture<ListParamterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParamterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParamterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
