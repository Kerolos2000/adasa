import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../../../../core/interfaces/post.interfaces';

@Component({
  selector: 'app-related-articles-section',
  imports: [RouterModule],
  templateUrl: './related-articles-section.component.html',
  styles: [],
})
export class RelatedArticlesSectionComponent {
  @Input() relatedPosts: Post[] = [];
}
