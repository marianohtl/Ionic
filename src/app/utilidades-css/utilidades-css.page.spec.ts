import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilidadesCssPage } from './utilidades-css.page';

describe('UtilidadesCssPage', () => {
  let component: UtilidadesCssPage;
  let fixture: ComponentFixture<UtilidadesCssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilidadesCssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilidadesCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
