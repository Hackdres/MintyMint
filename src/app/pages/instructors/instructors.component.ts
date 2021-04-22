import { Component, OnInit, ViewChild } from '@angular/core';

//Models
import { Instructor } from 'src/app/models/instructor.model';

//Services
import { InstructorsService } from 'src/app/services/instructors.service';

//Componets
import { InstructorCardComponent } from '../components/instructor-card/instructor-card.component';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  @ViewChild(InstructorCardComponent) instructorCard: InstructorCardComponent;
  instructorList: Instructor[];

  constructor(
    private instructorService: InstructorsService
  ) { }

  ngOnInit(): void {
    this.instructorList = this.instructorService.getInstructors();
  }

}
