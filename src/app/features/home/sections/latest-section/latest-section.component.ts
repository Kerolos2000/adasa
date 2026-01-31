import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../../../core/data/posts.data';
import { SectionLabelComponent } from '../../../../shared/components/section-label/section-label.component';

@Component({
  selector: 'app-latest-section',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionLabelComponent],
  templateUrl: './latest-section.component.html',
})
export class LatestSectionComponent {
  latestPosts = BLOG_DATA.posts.slice(3, 6);
}
