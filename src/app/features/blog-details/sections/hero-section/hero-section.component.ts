import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../../core/interfaces/post.interfaces';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Input() post!: Post;
}
