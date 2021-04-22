import { Component, OnInit } from '@angular/core';

//Models
import { Subject } from 'src/app/models/subject.model';

//Service
import { InstructorsService } from 'src/app/services/instructors.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectsList: Subject[];

  constructor(
    private instructorService: InstructorsService
  ) { }

  ngOnInit(): void {
    this.subjectsList = this.instructorService.getSubjects()
  }

}
