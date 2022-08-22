import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Student } from "../types/student";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  url: string = environment.API_URL;
  token: string = <string>localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/alunos`, {
      headers: { auth: this.token },
    });
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.url}/alunos/${id}`, {
      headers: { auth: this.token },
    });
  }
}
