import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDropdownBasic } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: NgbdDropdownBasic;
  let fixture: ComponentFixture<NgbdDropdownBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdDropdownBasic ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDropdownBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
