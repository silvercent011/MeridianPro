import { Component, Input, OnInit } from "@angular/core";
import { Student } from "../../types/student";

@Component({
  selector: "app-card-student",
  templateUrl: "./card-student.component.html",
  styles: [],
})
export class CardStudentComponent implements OnInit {
  @Input() student!: Student;

  constructor() {}

  ngOnInit(): void {}
}
