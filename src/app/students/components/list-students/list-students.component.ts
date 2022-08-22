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

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService
      .getAllStudents()
      .subscribe((response) => (this.students = response));
  }
}
