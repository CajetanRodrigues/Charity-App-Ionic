import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseFundsPage } from './raise-funds.page';

describe('RaiseFundsPage', () => {
  let component: RaiseFundsPage;
  let fixture: ComponentFixture<RaiseFundsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseFundsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseFundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
