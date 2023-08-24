import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySkilsComponent } from './my-skils/my-skils.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [  
    { path: 'about-me', component: AboutMeComponent },
    { path: 'my-skills', component: MySkilsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
