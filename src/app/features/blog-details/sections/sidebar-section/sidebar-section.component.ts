import { Component, Input } from '@angular/core';
import { BLOG_DATA } from '../../../../core/data/posts.data';
import { Post } from '../../../../core/models/post.model';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
})
export class SidebarSectionComponent {
  @Input() post!: Post;
  toc: Post[] = BLOG_DATA.posts;

  localizedDate() {
    if (!this.post?.date) return '';
    const date = new Date(this.post.date);
    return new Intl.DateTimeFormat('ar-EG', { day: 'numeric', month: 'long' }).format(date);
  }
}
