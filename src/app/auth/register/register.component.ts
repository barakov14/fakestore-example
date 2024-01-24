import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../core/store/actions/register.action";
import {Observable} from "rxjs";
import {isSubmittingSelector} from "../core/store/auth.selectors";
import {AuthService} from "../core/services/auth.service";
import {CurrentUserInterface} from "../../shared/core/interfaces/currentUser.interfaces";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  hide = true;
  isSubmitting$: Observable<boolean>

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log("Hello", this.isSubmitting$)
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    console.log(this.form.controls)
  }
  onSubmit() {
    this.store.dispatch(registerAction(this.form.value))
    this.authService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {
      console.log('currentUser', currentUser)
    })
  }
}
