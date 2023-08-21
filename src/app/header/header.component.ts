import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  animateBurger() {
    const button = document.querySelector('.hamburger');
    if (button) {
      button.classList.toggle('is-active');
    }
  }
}
