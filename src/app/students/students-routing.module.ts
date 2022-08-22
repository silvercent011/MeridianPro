import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentHomeComponent } from "./views/student-home/student-home.component";

const routes: Routes = [
  {
    path: "",
    component: StudentHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
