import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  ngOnInit(): void {
    AOS.init();

  }
}
