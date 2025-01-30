import { Component } from '@angular/core';

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

  loadImage1(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.isImg1Selected = true;
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
  }

  loadImage2(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.isImg2Selected = true;
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
  }

  loadImage3(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.isImg3Selected = true;
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
  }
}
