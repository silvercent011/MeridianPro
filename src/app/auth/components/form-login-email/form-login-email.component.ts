import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { User } from "../../types/user";

@Component({
  selector: "auth-form-login-email",
  templateUrl: "./form-login-email.component.html",
  styles: [],
})
export class FormLoginEmailComponent implements OnInit {
  cpf = "";
  password = "";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginWithCPF() {
    this.authService.SignInWithCPF(this.cpf, this.password).subscribe(
      (user: User) => {
        console.log(user.token);
        localStorage.setItem('token', <string>user.token)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
