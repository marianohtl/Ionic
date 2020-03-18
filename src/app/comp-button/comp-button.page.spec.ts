import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompButtonPage } from './comp-button.page';

describe('CompButtonPage', () => {
  let component: CompButtonPage;
  let fixture: ComponentFixture<CompButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
