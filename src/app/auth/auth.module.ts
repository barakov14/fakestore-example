import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {AuthComponent} from "./auth.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthRoutingModule} from "./auth-routing.module";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    AuthRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  exports: []
})
export class AuthModule {}
