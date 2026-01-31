import { Component } from '@angular/core';
import { BlogListComponent } from '../sections/blog-list/blog-list.component';
import { FilterSectionComponent } from '../sections/filter-section/filter-section.component';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';

@Component({
  selector: 'app-blog',
  imports: [HeroSectionComponent, FilterSectionComponent, BlogListComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {}
