/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Materialy_szkolenioweComponent } from './materialy_szkoleniowe.component';

describe('Materialy_szkolenioweComponent', () => {
  let component: Materialy_szkolenioweComponent;
  let fixture: ComponentFixture<Materialy_szkolenioweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Materialy_szkolenioweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Materialy_szkolenioweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
