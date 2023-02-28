/*
============================================
, Title: loan-calculator.component.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: loan-calculator.component.ts
============================================
*/

// import statement
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tells which css and html files to use
@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})

// export statement
export class LoanCalculatorComponent implements OnInit {

  // defined variables
  loanForm: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.loanForm = this.fb.group({
      loanAmount: [''],
      interestRate: [''],
      numOfYears: ['']
  })
}
  // calculate loan function
  calculateLoan() {
    const formValues = this.loanForm.value;
    const loanAmount = parseFloat(formValues.loanAmount);
    const interestRate = parseFloat(formValues.interestRate);
    const numOfYears = parseFloat(formValues.numOfYears);

    const numOfMonths = (numOfYears * 12);
    const ratePerPeriod = ((interestRate / 100) / 12);

    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
    this.interest = (this.monthlyPayment * numOfMonths) - loanAmount;
    }

  // clear entries fucntion
  clearEntries() {
    this.monthlyPayment = 0;
    this.interest = 0;
    this.loanForm.reset();
  }

  // returns results
  get form() {
    return this.loanForm.controls;
  }
}
