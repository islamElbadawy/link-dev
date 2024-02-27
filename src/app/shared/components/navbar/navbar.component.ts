import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMenu: boolean = false;

  toggleNavMenu() {
    this.showMenu = !this.showMenu;
  }
}
