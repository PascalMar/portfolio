import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('loader') loader!: ElementRef;

  myForm!: FormGroup;
  messageSent: string = '';
  isActive: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async sendMail() {
    const nameField = this.nameField.nativeElement;
    const messageField = this.messageField.nativeElement;
    const sendButton = this.sendButton.nativeElement;
    const emailField = this.emailField.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    emailField.disabled = true;
    this.isActive = !this.isActive;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('mail', emailField.value);

    //senden  
    try {
      await fetch('https://pascal-marienfeld.de/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd
        }
      );
      this.messageSent = 'Message successfully sent!';
    } catch (error) {
      this.messageSent = 'Sorry! There seems to have been an error :('
    }



    nameField.value = '';
    messageField.value = '';
    sendButton.disable = '';
    emailField.value = '';

    setTimeout(() => {
      this.messageSent = '';

      nameField.disabled = false;
      messageField.disabled = false;
      emailField.disabled = false;
      sendButton.disabled = false;
      this.isActive = false;
    }, 3000);

  }
}

