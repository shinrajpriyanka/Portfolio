import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BubblesComponent } from "./components/bubbles/bubbles.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AboutComponent, ContactComponent, ProjectsComponent, HeaderComponent, SkillsComponent, BubblesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Priyanka-portfolio';
}
