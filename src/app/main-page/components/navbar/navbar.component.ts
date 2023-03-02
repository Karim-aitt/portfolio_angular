import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  flagLanguage$ = this.ss.getFlagLanguage();

  constructor(private ss: ServiceService){}

  toggleFlagLanguage() {
    console.log("button on")
    this.ss.toggleFlagLanguage();
  }
}
