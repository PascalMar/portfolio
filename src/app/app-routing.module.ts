import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MySkilsComponent } from './my-skils/my-skils.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';

import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'legal-notice', component: LegalNoticeComponent},

];

const routerOptions = {
  anchorScrolling: 'enabled'
} as ExtraOptions;

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
