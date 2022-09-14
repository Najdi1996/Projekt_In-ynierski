/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Twoje_kontoComponent } from './twoje_konto.component';

describe('Twoje_kontoComponent', () => {
  let component: Twoje_kontoComponent;
  let fixture: ComponentFixture<Twoje_kontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Twoje_kontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Twoje_kontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
