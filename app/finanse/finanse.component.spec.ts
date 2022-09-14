/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinanseComponent } from './finanse.component';

describe('FinanseComponent', () => {
  let component: FinanseComponent;
  let fixture: ComponentFixture<FinanseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
