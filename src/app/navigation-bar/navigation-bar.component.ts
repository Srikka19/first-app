import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  aboutMeButton = document.getElementById('aboutMeButton');
  

  constructor() { }

  ngOnInit() {
    
  }
  // goToTop() {
  //   window.scrollTo(0,0);
  // }
  goToResume() {
    let el= document.getElementById('resume');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  goToAbout() {
    let el= document.getElementById('about-me');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo(0,el.scrollHeight);
  }
}

