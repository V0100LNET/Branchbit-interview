import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { BiometricsComponent } from './pages/biometrics/biometrics.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    BiometricsComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
