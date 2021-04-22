import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Instructor } from 'src/app/models/instructor.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {

  @Input() instructor: Instructor;
  // @ViewChild("myDiv") divView: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.instructor.first_color;
    // this.divView.nativeElement.innerHTML = "Hello Angular 10!";
  }

  openInstructorCard(element) {
    this.router.navigate([`/instructors/${element.id}`], { 
      state: element
    });
  }

  // verDetalle(element) {
  //   this.router.navigate([`/plataforma/bank-deposit/${element.id}`], { 
  //     state: element
  //   });
  // }

}
