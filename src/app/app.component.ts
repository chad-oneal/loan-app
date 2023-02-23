/*
============================================
, Title: app.component.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: for loan-app
============================================
*/

// import statement
import { Component } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export statement
export class AppComponent {
  title = 'loan-app';
}
