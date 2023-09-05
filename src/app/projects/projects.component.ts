import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      picture: '/assets/img/about-me/projects/join.png',
      headline: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: '',
      livetest: ''
    },
    {
      picture: '/assets/img/about-me/projects/el-pollo-loco.png',
      headline: 'El-Pollo-Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to fight against the Boss Chicken and his crew.',
      github: '',
      livetest: ''
    },
    {
      picture: '/assets/img/about-me/projects/crm.png',
      headline: 'Simple CRM',
      technologies: 'Angular | Firebase | Material Design | Api',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality. ',
      github: '',
      livetest: ''
    },
    {
      picture: '/assets/img/about-me/projects/portfolio.png',
      headline: 'My personal Portfolio',
      technologies: 'Angular | HTML | SCSS',
      description: 'My personal Website created with Angular and SCSS. ',
      github: 'https://github.com/PascalMar/portfolio',
      livetest: '#top'
    }
  ]

}
