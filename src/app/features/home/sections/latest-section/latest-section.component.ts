import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPostCardComponent } from '../../../../components/blog-post-card/blog-post-card.component';
import { SectionLabelComponent } from '../../../../components/section-label/section-label.component';
import { BLOG_DATA } from '../../../../core/data/posts.data';

@Component({
  selector: 'app-latest-section',
  imports: [RouterLink, SectionLabelComponent, BlogPostCardComponent],
  templateUrl: './latest-section.component.html',
})
export class LatestSectionComponent {
  latestPosts = BLOG_DATA.posts.slice(3, 6);
}
