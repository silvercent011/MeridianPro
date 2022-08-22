import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../../services/students.service";
import { Student } from "../../types/student";

@Component({
  selector: "app-student-home",
  templateUrl: "./student-home.component.html",
  styles: [],
})
export class StudentHomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
