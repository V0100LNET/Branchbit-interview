import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabEventInfo, TabEventInfoExternalLink } from '../interfaces/generla.interface';

@Injectable({
  providedIn: 'root'
})
export class BiometricsService {
  tabEvent: TabEventInfo | null = null;
  tabEventInfoExternalLink!: TabEventInfoExternalLink;
  
  formIdentification: FormGroup = this.formBuilder.group({
    expediente: [""],
    tabIdentificacion: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    digitalizacionColor: [""],
    digitalizacionCoincide: [""],
    consultaVigente: [""],
    identificacionCliente: [""],
    tabLinkExterno: [""],
    respuestaSolicitud: [""],
    motivoSolicitud: [""],
    obervations: [""]
  })

  formVoucher: FormGroup = this.formBuilder.group({
    expediente: [""],
    tabIdentificacion: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    digitalizacionColor: [""],
    digitalizacionCoincide: [""],
    consultaVigente: [""],
    identificacionCliente: [""],
    tabLinkExterno: [""],
    respuestaSolicitud: [""],
    motivoSolicitud: [""],
    obervations: [""]
  })

  formProperty: FormGroup = this.formBuilder.group({
    expediente: [""],
    tabIdentificacion: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    digitalizacionColor: [""],
    digitalizacionCoincide: [""],
    consultaVigente: [""],
    identificacionCliente: [""],
    tabLinkExterno: [""],
    respuestaSolicitud: [""],
    motivoSolicitud: [""],
    obervations: [""]
  })

  formContract: FormGroup = this.formBuilder.group({
    expediente: [""],
    tabIdentificacion: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    digitalizacionColor: [""],
    digitalizacionCoincide: [""],
    consultaVigente: [""],
    identificacionCliente: [""],
    tabLinkExterno: [""],
    respuestaSolicitud: [""],
    motivoSolicitud: [""],
    obervations: [""]
  })

  formContact: FormGroup = this.formBuilder.group({
    expediente: [""],
    tabIdentificacion: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    digitalizacionColor: [""],
    digitalizacionCoincide: [""],
    consultaVigente: [""],
    identificacionCliente: [""],
    tabLinkExterno: [""],
    respuestaSolicitud: [""],
    motivoSolicitud: [""],
    obervations: [""]
  })

  formPicture: FormGroup = this.formBuilder.group({
    expediente: [""],
    tabIdentificacion: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    digitalizacionColor: [""],
    digitalizacionCoincide: [""],
    consultaVigente: [""],
    identificacionCliente: [""],
    tabLinkExterno: [""],
    respuestaSolicitud: [""],
    motivoSolicitud: [""],
    obervations: [""]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }
}
