import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../../services/students.service";
import { Student } from "../../types/student";

@Component({
  selector: "app-list-students",
  templateUrl: "./list-students.component.html",
  styles: [],
})
export class ListStudentsComponent implements OnInit {
  students: Student[] = [];

  studentsToRender: Student[] = [];

  onlyActive: boolean = true;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe((response) => {
      this.students = response;
      this.studentsToRender = response;
    });
    this.onChange()
  }

  onChange() {
    if (!this.onlyActive) {
      this.studentsToRender = this.students;
    } else {
      const newData = this.students.filter((student) => {
        return student.enabled === true ? student : false;
      });
      this.studentsToRender = newData
    }
  }
}
