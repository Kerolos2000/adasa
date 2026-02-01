import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../core/interfaces/post.interfaces';

export type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-blog-post-card',
  imports: [RouterLink],
  templateUrl: './blog-post-card.component.html',
})
export class BlogPostCardComponent {
  @Input() post!: Post;
  @Input() index!: number;
  @Input() viewMode: ViewMode = 'grid';
}
