import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardStudentComponent } from "./components/card-student/card-student.component";
import { StudentHomeComponent } from "./views/student-home/student-home.component";
import { ListStudentsComponent } from "./components/list-students/list-students.component";
import { StudentsRoutingModule } from "./students-routing.module";
import { FormsModule } from "@angular/forms";
import { StudentListPageComponent } from './views/student-list-page/student-list-page.component';

@NgModule({
  declarations: [
    CardStudentComponent,
    StudentHomeComponent,
    ListStudentsComponent,
    StudentListPageComponent,
  ],
  imports: [CommonModule, FormsModule, StudentsRoutingModule],
})
export class StudentsModule {}
