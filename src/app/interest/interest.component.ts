/*
============================================
, Title: interest.component.spec.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: interest.component.spec.ts
============================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})

// export statement
export class InterestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
