import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { PersonService } from './services/person.service';
import { HomeContainerComponent } from './home-container/home-container.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';

export const homeRoutes: Routes = [

  { path: '', component: HomeContainerComponent}

];

@NgModule({
  declarations: [HomeContainerComponent, PersonListComponent, PieChartComponent, PersonAddFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    ChartsModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [
    PersonService
]
})
export class HomeModule { }
