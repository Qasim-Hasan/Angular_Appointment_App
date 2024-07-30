import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import both FormsModule and ReactiveFormsModule if needed
import {RouterModule} from '@angular/router';
import { HomeModule } from '../home/home.module';
@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,        // Import FormsModule for template-driven forms
    ReactiveFormsModule,
    RouterModule,// Import ReactiveFormsModule for reactive forms
    HomeModule,
  ]
})
export class ReservationModule { }
