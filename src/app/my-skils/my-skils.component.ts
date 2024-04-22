import { Component, OnInit } from '@angular/core';

import AOS from 'aos';


@Component({
  selector: 'app-my-skils',
  templateUrl: './my-skils.component.html',
  styleUrls: ['./my-skils.component.scss'],
})

export class MySkilsComponent implements OnInit {






  ngOnInit(): void {
    AOS.init();

  }


  icons = [
    {
      icon: '/assets/img/about-me/skills/angular.png',
      name: 'Angular'
    },
    {
      icon: '/assets/img/about-me/skills/react.png',
      name: 'React'
    },
    {
      icon: '/assets/img/about-me/skills/nodejs.png',
      name: 'Node.js'
    },
    {
      icon: '/assets/img/about-me/skills/typescript.png',
      name: 'Typescript'
    },
    {
      icon: '/assets/img/about-me/skills/javascript.png',
      name: 'Javascript'
    },
    {
      icon: '/assets/img/about-me/skills/html.png',
      name: 'HTML'
    },
    {
      icon: '/assets/img/about-me/skills/css.png',
      name: 'CSS'
    },
    {
      icon: '/assets/img/about-me/skills/git.png',
      name: 'Git'
    },
    {
      icon: '/assets/img/about-me/skills/scrum.png',
      name: 'Scrum'
    },
    {
      icon: '/assets/img/about-me/skills/api.png',
      name: 'Rest-Api'
    }   
  ]

}
