import { Component } from '@angular/core';
import { BiometricsService } from '../../services/biometrics.service';
import { Questions, Responses } from '../../interfaces/principal/images-options.interface';

@Component({
  selector: 'app-images-options',
  templateUrl: './images-options.component.html',
  styleUrls: ['./images-options.component.css']
})
export class ImagesOptionsComponent {
  urlImage1: string | ArrayBuffer | null = "assets/img/no-image.png";
  urlImage2: string | ArrayBuffer | null = "assets/img/no-image.png";
  urlImage3: string | ArrayBuffer | null = "assets/img/no-image.png";
  
  isImg1Selected: boolean = false;
  isImg2Selected: boolean = false;
  isImg3Selected: boolean = false;
  
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;

  checkbox1Text: string = "";
  checkbox2Text: string = "";
  checkbox3Text: string = "";

  questions: Questions[] = [
    {
      number: 1,
      text: '¿La digitalización de la ID para este folio está a color?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    },
    {
      number: 2,
      text: '¿Los datos den ambas ID, expediente y digitalización coincide?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    }
  ];
  
  constructor(
    private biometricsService: BiometricsService
  ){}

  initDataFormImage(fileName: string, numberImage: string): void {    
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get(numberImage)?.setValue(fileName);
      break;
      case 1: 
        this.biometricsService.formVoucher.get(numberImage)?.setValue(fileName);
      break;
      case 2: 
        this.biometricsService.formProperty.get(numberImage)?.setValue(fileName);
      break;
      case 3: 
        this.biometricsService.formContract.get(numberImage)?.setValue(fileName);
      break;
      case 4: 
        this.biometricsService.formContact.get(numberImage)?.setValue(fileName);
      break;
      case 5: 
        this.biometricsService.formPicture.get(numberImage)?.setValue(fileName);
      break;
    }
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

  removeDataFormImage(numberImage: string): void {    
    switch(this.biometricsService.tabEvent?.indexTab){
      case 0: 
        this.biometricsService.formIdentification.get(numberImage)?.setValue("");
      break;
      case 1: 
        this.biometricsService.formVoucher.get(numberImage)?.setValue("");
      break;
      case 2: 
        this.biometricsService.formProperty.get(numberImage)?.setValue("");
      break;
      case 3: 
        this.biometricsService.formContract.get(numberImage)?.setValue("");
      break;
      case 4: 
        this.biometricsService.formContact.get(numberImage)?.setValue("");
      break;
      case 5: 
        this.biometricsService.formPicture.get(numberImage)?.setValue("");
      break;
    }
  }

  loadImage1(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.isImg1Selected = true;
      this.initDataFormImage(file.name, "image1");
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.urlImage1 = event.target.result
      }
      reader.readAsDataURL(file);
    }
  }

  deleteImage1(): void {
    this.urlImage1 = "assets/img/no-image.png";
    this.isImg1Selected = false;
    this.removeDataFormImage("image1");
  }

  loadImage2(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.isImg2Selected = true;
      this.initDataFormImage(file.name, "image2");
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.urlImage2 = event.target.result
      }
      reader.readAsDataURL(file);
    }
  }

  deleteImage2(): void {
    this.urlImage2 = "assets/img/no-image.png";
    this.isImg2Selected = false;
    this.removeDataFormImage("image2");
  }

  loadImage3(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.isImg3Selected = true;
      this.initDataFormImage(file.name, "image3");
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.urlImage3 = event.target.result
      }
      reader.readAsDataURL(file);
    }
  }

  deleteImage3(): void {
    this.urlImage3 = "assets/img/no-image.png";
    this.isImg3Selected = false;
    this.removeDataFormImage("image3");
  }

  onCheckboxChange(questionIndex: number, responseIndex: number, numberQuestion: number) {
    const question: Questions = this.questions[questionIndex];
    const selectedResponse: Responses = question.responses[responseIndex];

    question.responses.forEach((response, index) => {
      if (index !== responseIndex) {
        response.selected = false;
      }
    });

    if(numberQuestion == 1) {
      this.initCheckQuestion("digitalizacionColor", selectedResponse.value);
    }

    if(numberQuestion == 2) {
      this.initCheckQuestion("digitalizacionCoincide", selectedResponse.value);
    }
  }
}
