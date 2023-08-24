import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MySkilsComponent } from './my-skils/my-skils.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-skills', component: MySkilsComponent },

];

const routerOptions = {
  anchorScrolling: 'enabled'
} as ExtraOptions;

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
