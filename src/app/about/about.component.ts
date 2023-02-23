/*
============================================
, Title: about.component.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: about.component.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// export statement
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
