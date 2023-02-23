/*
============================================
, Title: loan-calculator.component.spec.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: loan-calculator.component.spec.ts
+===========================================
*/

// import statement
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanCalculatorComponent } from './loan-calculator.component';

// description and declaration of variables
describe('LoanCalculatorComponent', () => {
  let component: LoanCalculatorComponent;
  let fixture: ComponentFixture<LoanCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
