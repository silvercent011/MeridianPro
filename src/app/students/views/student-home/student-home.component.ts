import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StudentsService } from "../../services/students.service";
import { Student } from "../../types/student";

@Component({
  selector: "app-student-home",
  templateUrl: "./student-home.component.html",
  styles: [],
})
export class StudentHomeComponent implements OnInit {
  matricula: string = "";

  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.matricula = <string>this.route.snapshot.paramMap.get("id");

    this.studentsService.getStudent(this.matricula).subscribe((student) => {
      this.student = student;
    });
  }
}
