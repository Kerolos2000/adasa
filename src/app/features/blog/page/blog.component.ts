import { Component } from '@angular/core';
import { BlogListSectionComponent } from '../sections/blog-list-section/blog-list-section.component';
import { FilterSectionComponent } from '../sections/filter-section/filter-section.component';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';

@Component({
  selector: 'app-blog',
  imports: [HeroSectionComponent, FilterSectionComponent, BlogListSectionComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {}
