import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { User } from "../../types/user";

@Component({
  selector: "app-form-login-email",
  templateUrl: "./form-login-email.component.html",
  styles: [],
})
export class FormLoginEmailComponent {
  cpf = "";
  password = "";

  constructor(private authService: AuthService) {}


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
