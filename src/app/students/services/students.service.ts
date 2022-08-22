import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../types/student";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  url: string = "";
  token: string = "";

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/alunos`, {
      headers: { token: this.token },
    });
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.url}/alunos/${id}`, {
      headers: { token: this.token },
    });
  }
}
