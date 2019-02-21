import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationBarComponent } from './navigation-bar.component';
import { HomeComponent } from '../home/home.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ResumeComponent } from '../resume/resume.component';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import {By} from '@angular/platform-browser';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        NavigationBarComponent,
        HomeComponent,
        AboutMeComponent,
        ResumeComponent,
        BottomNavComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the different sections', () => {
    let about = document.getElementById('aboutMeButton')
    about.click();
    expect(window.scrollY).toEqual(about.scrollHeight);

    let resume = document.getElementById('resumeButton')
    resume.click();
    expect(window.scrollY).toEqual(resume.scrollHeight);
  });
});
