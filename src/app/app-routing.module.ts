import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ResumeComponent} from './resume/resume.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about-me',
  component: AboutMeComponent
},
{
  path: 'resume',
  component: ResumeComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
