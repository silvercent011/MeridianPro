import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentHomeComponent } from "./views/student-home/student-home.component";
import { StudentListPageComponent } from "./views/student-list-page/student-list-page.component";

const routes: Routes = [
  {
    path: "",
    component: StudentListPageComponent,
  },
  {
    path: ":id",
    component: StudentHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
