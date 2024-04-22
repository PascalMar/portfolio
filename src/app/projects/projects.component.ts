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
      github: 'https://github.com/PascalMar/join',
      livetest: 'https://join.pascal-marienfeld.de/'
    },
    {
      picture: '/assets/img/about-me/projects/el-pollo-loco1.png',
      headline: 'El-Pollo-Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to fight against the Boss Chicken and his crew.',
      github: 'https://github.com/PascalMar/El-Pollo-Loco',
      livetest: 'https://el-pollo-loco.pascal-marienfeld.de/'
    },
    {
      picture: '/assets/img/about-me/projects/crm.png',
      headline: 'Simple CRM',
      technologies: 'Angular | Firebase | Material Design | Api | Bootstrap',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality. ',
      github: 'https://github.com/PascalMar/simple-crm',
      livetest: 'https://simple-crm.pascal-marienfeld.de'
    },
    {
      picture: '/assets/img/about-me/projects/myFlix.png',
      headline: 'myFlix',
      technologies: 'React | Node.js | MongoDB | Bootstrap',
      description: 'A basic full-stack app allowing users to log in, view a list of movies, access more details about each movie, mark favorites, edit their profile, and see their favorited films.',
      github: 'https://github.com/PascalMar/myFlix-Client',
      livetest: 'https://pa-mar-myflix.netlify.app/'
    }
  ]

}
