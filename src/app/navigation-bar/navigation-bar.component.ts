import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  goToTop() {
    scrollTo(0,0);
  }
  goToWork() {
    let el= document.getElementById('work-experience');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  goToEducation() {
    
    let el= document.getElementById('education');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // ('button').toggleClass()
  }

}
