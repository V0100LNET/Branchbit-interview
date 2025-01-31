import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BiometricsService } from '../../services/biometrics.service';

@Component({
  selector: 'app-application-response',
  templateUrl: './application-response.component.html',
  styleUrls: ['./application-response.component.css']
})
export class ApplicationResponseComponent {

  constructor(
    private biometricsService: BiometricsService
  ){}

  initDataForm(field: string, value: string): void { 
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get(field)?.setValue(value);
      break;
      case 1: 
        this.biometricsService.formVoucher.get(field)?.setValue(value);
      break;
      case 2: 
        this.biometricsService.formProperty.get(field)?.setValue(value);
      break;
      case 3: 
        this.biometricsService.formContract.get(field)?.setValue(value);
      break;
      case 4: 
        this.biometricsService.formContact.get(field)?.setValue(value);
      break;
      case 5: 
        this.biometricsService.formPicture.get(field)?.setValue(value);
      break;
    }
  }

  selectionChangeRes(event: MatSelectChange): void {
    this.initDataForm("respuestaSolicitud", event.value);
  }

  selectionChangeMot(event: MatSelectChange): void {
    this.initDataForm("motivoSolicitud", event.value);
  }

  changeTextArea(event: any): void {
    const target = event.target as HTMLTextAreaElement; 
    const value = target.value; 
    this.initDataForm("obervations", value);
  }
  
}
