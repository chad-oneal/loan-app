/*
============================================
, Title: main.ts for loan-app
; Author: Chad ONeal
; Date: 02/23/2023
; Description: main.ts for loan-app
+===========================================
*/

// import statements
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if statement
if (environment.production) {
  enableProdMode();
}

// dynamic material
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
