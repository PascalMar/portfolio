import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkilsComponent } from './my-skils/my-skils.component';

const routes: Routes = [
  {path: 'my-skills', component: MySkilsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    MySkilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes, {
        enableTracing: false,
        anchorScrolling: 'enabled'
      }
    )    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
