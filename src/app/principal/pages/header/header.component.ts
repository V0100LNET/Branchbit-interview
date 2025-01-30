import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() drawer!: MatDrawer;

  constructor(
    private router: Router,
  ){}

  openMenu() {
    this.drawer.toggle();
  }
}
