import { Injectable } from '@angular/core';

//Models
import { Menu } from '../models/menu.model';
import { Instructor } from '../models/instructor.model';
import { Subject } from '../models/subject.model';

//get Data
import menu from '../../assets/json/menu.json';
import instructors from '../../assets/json/instructors.json';
import subjects from '../../assets/json/subjects.json';

@Injectable({
  providedIn: 'root',
})
export class InstructorsService {
  menuList: Menu[] = menu;
  instructorList: Instructor[] = instructors;
  subjectsList: Subject[] = subjects;

  constructor() {}

  getMenu() {
    return this.menuList;
  }

  getInstructors() {
    return this.instructorList;
  }

  getSubjects() {
    return this.subjectsList;
  }

}
