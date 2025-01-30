import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../interfaces/principal/clients.interface';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent {
  tableColumns: string[] = ["name", "dateFolio", "sacFolio", "mvFolio", "register", "actions"];
  tableData = new MatTableDataSource<Client>([]);

  constructor(){
    this.tableData.data = [
      {
        name: "Jerry Mattedi", 
        dateFolio: "19 May, 2021 : 10:10 AM", 
        sacFolio: "251-661-5362", 
        mvFolio: "12345678", 
        register: true
      }
    ]
  }
}
