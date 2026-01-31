import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../../../core/data/posts.data';
import { BlogPostCardComponent } from '../../../../shared/components/blog-post-card/blog-post-card.component';
import { SectionLabelComponent } from '../../../../shared/components/section-label/section-label.component';

@Component({
  selector: 'app-latest-section',
  imports: [RouterLink, SectionLabelComponent, BlogPostCardComponent],
  templateUrl: './latest-section.component.html',
})
export class LatestSectionComponent {
  latestPosts = BLOG_DATA.posts.slice(3, 6);
}
