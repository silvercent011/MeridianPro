import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../types/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user!: User;
  url: string = "";
  constructor(private http: HttpClient) {}

  SignInWithEmail(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.url}/users/auth`, { email, password });
  }

  SignInWithCPF(cpf: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.url}/users/auth`, { cpf, password });
  }

  SetUser(user: User) {
    this.user = user;
  }
}
