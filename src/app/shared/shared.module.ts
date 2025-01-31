import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { MaterialModule } from '../material/material.module';
import { ImagesOptionsComponent } from './components/images-options/images-options.component';
import { ExternalLinksComponent } from './components/external-links/external-links.component';
import { ApplicationResponseComponent } from './components/application-response/application-response.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    InfoTableComponent,
    ImagesOptionsComponent,
    ExternalLinksComponent,
    ApplicationResponseComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    InfoTableComponent,
    ImagesOptionsComponent,
    ExternalLinksComponent,
    ApplicationResponseComponent
  ]
})
export class SharedModule { }
