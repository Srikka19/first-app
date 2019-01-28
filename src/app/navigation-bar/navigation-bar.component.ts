import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  navbarOpen = false;
  private toggle : boolean = false;

  constructor() { }

  ngOnInit() {
    
  }
  goToTop() {
    window.scrollTo(0,0);

  }
  goToResume() {
    let el= document.getElementById('resume');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  goToAbout() {
    let el= document.getElementById('about-me');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo(0,el.scrollHeight);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  show:boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }
}

