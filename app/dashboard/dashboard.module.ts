import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { AdditionalLoanInfoComponent } from './additional-loan-info/additional-loan-info.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    IconsModule,
    LayoutModule,
  ],
  declarations: [
    DashboardComponent,
    AdditionalLoanInfoComponent,
    LoanDetailsComponent
  ]
})
export class DashboardModule { }
