import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionLabelComponent } from '../../../../components/section-label/section-label.component';
import { BLOG_DATA } from '../../../../core/data/posts.data';
import { Post } from '../../../../core/interfaces/post.interfaces';

@Component({
  selector: 'app-selected-articles-section',
  imports: [RouterLink, SectionLabelComponent],
  templateUrl: './selected-articles-section.component.html',
})
export class SelectedArticlesSectionComponent {
  posts: Post[] = BLOG_DATA.posts.slice(0, 3);
}
