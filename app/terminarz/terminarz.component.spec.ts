/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TerminarzComponent } from './terminarz.component';

describe('TerminarzComponent', () => {
  let component: TerminarzComponent;
  let fixture: ComponentFixture<TerminarzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminarzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
