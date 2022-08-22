import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./views/login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormLoginEmailComponent } from './components/form-login-email/form-login-email.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent, FormLoginEmailComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
