import { Component, Input } from '@angular/core';
import { BLOG_DATA } from '../../../core/data/posts.data';
import { Post } from '../../../core/interfaces/post.interfaces';
import { ContentSectionComponent } from '../sections/content-section/content-section.component';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';
import { RelatedArticlesSectionComponent } from '../sections/related-articles-section/related-articles-section.component';
import { SidebarSectionComponent } from '../sections/sidebar-section/sidebar-section.component';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  imports: [
    HeroSectionComponent,
    ContentSectionComponent,
    SidebarSectionComponent,
    RelatedArticlesSectionComponent,
  ],
})
export class BlogDetailsComponent {
  post!: Post;
  relatedPosts: Post[] = [];

  @Input()
  set slug(value: string) {
    this.post = BLOG_DATA.posts.find((p) => p.slug === value)!;
    this.relatedPosts = BLOG_DATA.posts
      .filter((p) => p.id !== this.post.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }
}
