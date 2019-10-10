import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Constants } from '../../../shared/constants';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  userNameFormControl = new FormControl(Constants.BLANK_STRING, [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern(Constants.ALPHA_NUMERIC_PATTERN)
  ]);

  passwordFormControl = new FormControl(Constants.BLANK_STRING, [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern(Constants.ALPHA_NUMERIC_PATTERN)
  ]);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: this.userNameFormControl,
      password: this.passwordFormControl
    });
  }

  getUserErrorMessage(): string {
    return this.userNameFormControl.hasError(Constants.ERROR_TYPE_REQUIRED) ? Constants.REQUIRED_ERROR_MSG :
      this.userNameFormControl.hasError(Constants.ERROR_TYPE_PATTERN)
      ? Constants.ALPHA_NUMERIC_ERROR_MSG : Constants.BLANK_STRING;
  }

  getPasswordErrorMessage(): string {
    return this.passwordFormControl.hasError(Constants.ERROR_TYPE_REQUIRED) ? Constants.REQUIRED_ERROR_MSG :
      this.passwordFormControl.hasError(Constants.ERROR_TYPE_PATTERN)
      ? Constants.ALPHA_NUMERIC_ERROR_MSG : Constants.BLANK_STRING;
  }

  login(): void  {
    this.router.navigateByUrl('/home');
  }

}
