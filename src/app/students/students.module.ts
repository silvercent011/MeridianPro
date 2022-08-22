import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardStudentComponent } from "./components/card-student/card-student.component";
import { StudentHomeComponent } from "./views/student-home/student-home.component";
import { ListStudentsComponent } from "./components/list-students/list-students.component";
import { StudentsRoutingModule } from "./students-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CardStudentComponent,
    StudentHomeComponent,
    ListStudentsComponent,
  ],
  imports: [CommonModule, FormsModule, StudentsRoutingModule],
})
export class StudentsModule {}
