import { Component, Input } from '@angular/core';
import { BLOG_DATA } from '../../../core/data/posts.data';
import { Post } from '../../../core/models/post.model';
import { ContentSectionComponent } from '../sections/content-section/content-section.component';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';
import { SidebarSectionComponent } from '../sections/sidebar-section/sidebar-section.component';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  imports: [HeroSectionComponent, ContentSectionComponent, SidebarSectionComponent],
})
export class BlogDetailsComponent {
  post!: Post;
  relatedPosts: Post[] = [];

  @Input() slug!: string;

  ngOnInit() {
    this.post = BLOG_DATA.posts.find((p) => p.slug === this.slug)!;
    this.relatedPosts = BLOG_DATA.posts
      .filter((p) => p.category === this.post?.category && p.slug !== this.post?.slug)
      .slice(0, 3);
  }
}
