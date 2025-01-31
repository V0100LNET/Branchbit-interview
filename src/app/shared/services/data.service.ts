import { Injectable } from '@angular/core';
import { Questions } from '../interfaces/principal/images-options.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questionsINE: Questions[] = [
    {
      number: 1,
      text: '¿La información devuelta por tus consultas es vigente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    },
    {
      number: 2,
      text: '¿La información devuelta por las coincide con la identificación del cliente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    }
  ];
  questionsCURP: Questions[] = [
    {
      number: 1,
      text: '¿La información devuelta por tus consultas es vigente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    },
    {
      number: 2,
      text: '¿La información devuelta por las coincide con la identificación del cliente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    }
  ];
  questionsSEPOMEX: Questions[] = [
    {
      number: 1,
      text: '¿La información devuelta por tus consultas es vigente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    },
    {
      number: 2,
      text: '¿La información devuelta por las coincide con la identificación del cliente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    }
  ];
  questionsOTROS: Questions[] = [
    {
      number: 1,
      text: '¿La información devuelta por tus consultas es vigente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    },
    {
      number: 2,
      text: '¿La información devuelta por las coincide con la identificación del cliente?',
      responses: [
        { value: 'Si', selected: false },
        { value: 'No', selected: false },
        { value: 'No Aplica', selected: false }
      ]
    }
  ];
  constructor() { }
}
