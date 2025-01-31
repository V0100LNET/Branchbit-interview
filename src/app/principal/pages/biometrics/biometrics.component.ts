import { ModeDialogData, TabEventInfo } from 'src/app/shared/interfaces/generla.interface';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { BiometricsService } from 'src/app/shared/services/biometrics.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.css']
})
export class BiometricsComponent implements OnInit {
  tabEvent: TabEventInfo | null = null;
  selectedInfo: string = "expCredito";

  constructor(
    private biometricsService: BiometricsService,
    private matDialog: MatDialog
  ){}
  
  ngOnInit(): void {
    this.biometricsService.formIdentification.get('expediente')?.setValue(this.selectedInfo);
    this.biometricsService.formIdentification.get('tabIdentificacion')?.setValue('Identificación');
    this.tabEvent = { indexTab: 0, nameTab: "Identificación" };
    this.biometricsService.tabEvent = this.tabEvent;
    this.initTabLinkExternal();
  }

  initDataForm(): void { 
    this.biometricsService.tabEvent = this.tabEvent;

    switch(this.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get('expediente')?.setValue(this.selectedInfo);
        this.biometricsService.formIdentification.get('tabIdentificacion')?.setValue(this.tabEvent.nameTab);
      break;
      case 1: 
        this.biometricsService.formVoucher.get('expediente')?.setValue(this.selectedInfo);
        this.biometricsService.formVoucher.get('tabIdentificacion')?.setValue(this.tabEvent.nameTab);
      break;
      case 2: 
        this.biometricsService.formProperty.get('expediente')?.setValue(this.selectedInfo);
        this.biometricsService.formProperty.get('tabIdentificacion')?.setValue(this.tabEvent.nameTab);
      break;
      case 3: 
        this.biometricsService.formContract.get('expediente')?.setValue(this.selectedInfo);
        this.biometricsService.formContract.get('tabIdentificacion')?.setValue(this.tabEvent.nameTab);
      break;
      case 4: 
        this.biometricsService.formContact.get('expediente')?.setValue(this.selectedInfo);
        this.biometricsService.formContact.get('tabIdentificacion')?.setValue(this.tabEvent.nameTab);
      break;
      case 5: 
        this.biometricsService.formPicture.get('expediente')?.setValue(this.selectedInfo);
        this.biometricsService.formPicture.get('tabIdentificacion')?.setValue(this.tabEvent.nameTab);
      break;
    }
  }

  initTabLinkExternal(): void {
    this.biometricsService.formIdentification.get('tabLinkExterno')?.setValue("INE");
    this.biometricsService.formVoucher.get('tabLinkExterno')?.setValue("INE");
    this.biometricsService.formProperty.get('tabLinkExterno')?.setValue("INE");
    this.biometricsService.formContract.get('tabLinkExterno')?.setValue("INE");
    this.biometricsService.formContact.get('tabLinkExterno')?.setValue("INE");
    this.biometricsService.formPicture.get('tabLinkExterno')?.setValue("INE");
  }

  initDataFormTabLinkExternal(): void {     
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get('tabLinkExterno')?.setValue(this.biometricsService.tabEventInfoExternalLink.nameTab);
      break;
      case 1: 
        this.biometricsService.formVoucher.get('tabLinkExterno')?.setValue(this.biometricsService.tabEventInfoExternalLink.nameTab);
      break;
      case 2: 
        this.biometricsService.formProperty.get('tabLinkExterno')?.setValue(this.biometricsService.tabEventInfoExternalLink.nameTab);
      break;
      case 3: 
        this.biometricsService.formContract.get('tabLinkExterno')?.setValue(this.biometricsService.tabEventInfoExternalLink.nameTab);
      break;
      case 4: 
        this.biometricsService.formContact.get('tabLinkExterno')?.setValue(this.biometricsService.tabEventInfoExternalLink.nameTab);
      break;
      case 5: 
        this.biometricsService.formPicture.get('tabLinkExterno')?.setValue(this.biometricsService.tabEventInfoExternalLink.nameTab);
      break;
    }
  }

  selectedTabChange(event: MatTabChangeEvent ): void {
    this.tabEvent = { indexTab: event.index, nameTab: event.tab.textLabel };    
    this.initDataForm();
    // this.initDataFormTabLinkExternal();
  }

  selectionChange(event: MatSelectChange): void {
    this.selectedInfo = event.source.value;
    this.initDataForm();
  }

  finish(): void {
    this.showModal();
  }

  showModal(): void {
    const dialogData: ModeDialogData<boolean> = {
      mode: 'Create',
      data: true
    }

    const dialog = this.matDialog.open(ModalComponent, {
      disableClose: true,
      data: dialogData,
      panelClass: 'modal-width'
    })
  }
}
