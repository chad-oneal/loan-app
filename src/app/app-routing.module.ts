/*
============================================
, Title: app-routing.module.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: App routing module for in-n-out-books
+===========================================
*/

// import statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

// routes
const routes: Routes = [
  {
    path: '',
    component: LoanCalculatorComponent
  },
  {
    path: 'loan-calculator',
    component: LoanCalculatorComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
