/*
============================================
, Title: contact-us.component.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: contact-us.component.ts
============================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

// export statement
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
