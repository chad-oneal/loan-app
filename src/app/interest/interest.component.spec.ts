/*
============================================
, Title: interest.component.spec.ts
; Author: Chad ONeal
; Date: 02/23/2023
; Description: interest.component.spec.ts
============================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestComponent } from './interest.component';

// description and declaration of variables
describe('InterestComponent', () => {
  let component: InterestComponent;
  let fixture: ComponentFixture<InterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
