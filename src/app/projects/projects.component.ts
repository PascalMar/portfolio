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
      headline: 'Join'
    },
    {
      picture: '/assets/img/about-me/projects/el-pollo-loco.png',
      headline: 'El-Pollo-Loco'
    },
    {
      picture: '/assets/img/about-me/projects/crm.png',
      headline: 'Simple CRM'
    }
  ]

}
