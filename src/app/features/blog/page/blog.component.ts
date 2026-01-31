import { Component } from '@angular/core';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';

@Component({
  selector: 'app-blog',
  imports: [HeroSectionComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {}
