import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    AOS.init();
  }

  navigateToSkills() {
    this.router.navigateByUrl('/my-skills');
  }



}
