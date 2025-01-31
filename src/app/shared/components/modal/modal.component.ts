import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModeDialogData } from '../../interfaces/generla.interface';
import { BiometricsService } from '../../services/biometrics.service';
import { DataForm } from '../../interfaces/principal/biometrics.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: ModeDialogData<boolean>,
    private biometricsService: BiometricsService    
  ){}

  get modeDialog(): string {
    return this.dialogData.mode;
  }

  get dataForm(): DataForm {
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: return this.biometricsService.formIdentification.value;
      case 1: return this.biometricsService.formVoucher.value;
      case 2: return this.biometricsService.formProperty.value;
      case 3: return this.biometricsService.formContract.value;
      case 4: return this.biometricsService.formContact.value;
      case 5: return this.biometricsService.formPicture.value;
      default: return this.biometricsService.formPicture.value
    } 
  }
}
