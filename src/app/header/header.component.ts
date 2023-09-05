import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  visible: boolean = false

  animateBurger() {
    const button = document.querySelector('.hamburger');
    if (button) {
      button.classList.toggle('is-active');
    }
  }

  openHamburger() {
    this.visible = !this.visible
  }
}
