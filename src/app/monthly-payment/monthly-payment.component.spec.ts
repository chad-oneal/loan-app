/*
============================================
, Title: monthly-payment.component.spec.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: monthly-payment.component.spec.ts
============================================
*/

// import statement
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyPaymentComponent } from './monthly-payment.component';

// description and declaration of variables
describe('MonthlyPaymentComponent', () => {
  let component: MonthlyPaymentComponent;
  let fixture: ComponentFixture<MonthlyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
