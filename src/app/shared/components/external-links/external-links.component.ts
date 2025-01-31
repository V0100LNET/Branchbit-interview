import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TabEventInfoExternalLink } from '../../interfaces/generla.interface';
import { BiometricsService } from '../../services/biometrics.service';
import { Questions, Responses } from '../../interfaces/principal/images-options.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.css']
})
export class ExternalLinksComponent implements OnInit {
  tabEventInfoExternalLink!: TabEventInfoExternalLink;

  constructor(
    private biometricsService: BiometricsService,
    private dataService: DataService
  ){}

  ngOnInit(): void {
    this.biometricsService.formIdentification.get('tabLinkExterno')?.setValue("INE");
    this.tabEventInfoExternalLink = { indexTab: 0, nameTab: "INE" };
    this.biometricsService.tabEventInfoExternalLink = this.tabEventInfoExternalLink;
  }

  get getDataINE(): Questions[] {
    return this.dataService.questionsINE;
  }

  get getDataCURP(): Questions[] {
    return this.dataService.questionsCURP;
  }

  get getDataSEPOMEX(): Questions[] {
    return this.dataService.questionsSEPOMEX;
  }

  get getDataOTROS(): Questions[] {
    return this.dataService.questionsOTROS;
  }

  initDataFormTabLinkExternal(): void { 
    this.biometricsService.tabEventInfoExternalLink = this.tabEventInfoExternalLink;
    
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get('tabLinkExterno')?.setValue(this.tabEventInfoExternalLink.nameTab);
      break;
      case 1: 
        this.biometricsService.formVoucher.get('tabLinkExterno')?.setValue(this.tabEventInfoExternalLink.nameTab);
      break;
      case 2: 
        this.biometricsService.formProperty.get('tabLinkExterno')?.setValue(this.tabEventInfoExternalLink.nameTab);
      break;
      case 3: 
        this.biometricsService.formContract.get('tabLinkExterno')?.setValue(this.tabEventInfoExternalLink.nameTab);
      break;
      case 4: 
        this.biometricsService.formContact.get('tabLinkExterno')?.setValue(this.tabEventInfoExternalLink.nameTab);
      break;
      case 5: 
        this.biometricsService.formPicture.get('tabLinkExterno')?.setValue(this.tabEventInfoExternalLink.nameTab);
      break;
    }
  }

  selectedIndexTab(event: MatTabChangeEvent): void {
    this.tabEventInfoExternalLink = { indexTab: event.index, nameTab: event.tab.textLabel };    
    this.initDataFormTabLinkExternal();
  }

  initCheckQuestion(field: string, checkBoxText: string): void {    
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get(field)?.setValue(checkBoxText);
      break;
      case 1: 
        this.biometricsService.formVoucher.get(field)?.setValue(checkBoxText);
      break;
      case 2: 
        this.biometricsService.formProperty.get(field)?.setValue(checkBoxText);
      break;
      case 3: 
        this.biometricsService.formContract.get(field)?.setValue(checkBoxText);
      break;
      case 4: 
        this.biometricsService.formContact.get(field)?.setValue(checkBoxText);
      break;
      case 5: 
        this.biometricsService.formPicture.get(field)?.setValue(checkBoxText);
      break;
    }
  }

  onCheckboxChangeINE(questionIndex: number, responseIndex: number, numberQuestion: number) {
    const question: Questions = this.getDataINE[questionIndex];
    const selectedResponse: Responses = question.responses[responseIndex];

    question.responses.forEach((response, index) => {
      if (index !== responseIndex) {
        response.selected = false;
      }
    });

    if(numberQuestion == 1) {
      this.initCheckQuestion("consultaVigente", selectedResponse.value);
    }

    if(numberQuestion == 2) {
      this.initCheckQuestion("identificacionCliente", selectedResponse.value);
    }
  }

  onCheckboxChangeCURP(questionIndex: number, responseIndex: number, numberQuestion: number) {
    const question: Questions = this.getDataCURP[questionIndex];
    const selectedResponse: Responses = question.responses[responseIndex];

    question.responses.forEach((response, index) => {
      if (index !== responseIndex) {
        response.selected = false;
      }
    });

    if(numberQuestion == 1) {
      this.initCheckQuestion("consultaVigente", selectedResponse.value);
    }

    if(numberQuestion == 2) {
      this.initCheckQuestion("identificacionCliente", selectedResponse.value);
    }
  }

  onCheckboxChangeSEPOMEX(questionIndex: number, responseIndex: number, numberQuestion: number) {
    const question: Questions = this.getDataSEPOMEX[questionIndex];
    const selectedResponse: Responses = question.responses[responseIndex];

    question.responses.forEach((response, index) => {
      if (index !== responseIndex) {
        response.selected = false;
      }
    });

    if(numberQuestion == 1) {
      this.initCheckQuestion("consultaVigente", selectedResponse.value);
    }

    if(numberQuestion == 2) {
      this.initCheckQuestion("identificacionCliente", selectedResponse.value);
    }
  }

  onCheckboxChangeOTROS(questionIndex: number, responseIndex: number, numberQuestion: number) {
    const question: Questions = this.getDataOTROS[questionIndex];
    const selectedResponse: Responses = question.responses[responseIndex];

    question.responses.forEach((response, index) => {
      if (index !== responseIndex) {
        response.selected = false;
      }
    });

    if(numberQuestion == 1) {
      this.initCheckQuestion("consultaVigente", selectedResponse.value);
    }

    if(numberQuestion == 2) {
      this.initCheckQuestion("identificacionCliente", selectedResponse.value);
    }
  }
}
