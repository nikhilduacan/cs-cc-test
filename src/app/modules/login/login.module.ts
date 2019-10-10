import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginFormComponent } from './login-form/login-form.component';
import { MatCardModule, MatFormFieldModule, MatInputModule  } from '@angular/material';

export const loginRoutes: Routes = [
  {
      path: '', component: LoginFormComponent
  }
];


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
