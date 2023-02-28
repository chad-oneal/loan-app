/*
============================================
, Title: monthly-payment.component.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: monthly-payment.component.ts
============================================
*/

// import statement
import { Component, OnInit, Input } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})

// export statement
export class MonthlyPaymentComponent implements OnInit {

  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
