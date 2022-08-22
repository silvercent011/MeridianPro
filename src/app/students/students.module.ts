import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardStudentComponent } from "./components/card-student/card-student.component";
import { StudentHomeComponent } from "./views/student-home/student-home.component";
import { ListStudentsComponent } from "./components/list-students/list-students.component";
import { StudentsRoutingModule } from "./students-routing.module";

@NgModule({
  declarations: [
    CardStudentComponent,
    StudentHomeComponent,
    ListStudentsComponent,
  ],
  imports: [CommonModule, StudentsRoutingModule],
})
export class StudentsModule {}
