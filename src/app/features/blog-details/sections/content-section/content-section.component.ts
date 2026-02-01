import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../../../../core/interfaces/post.interfaces';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent implements OnChanges {
  @Input() post!: Post;
  contentBlocks: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && this.post?.content) {
      let headerCount = 0;
      this.contentBlocks = this.post.content.split('\n\n').map((block) => {
        if (block.startsWith('## ')) {
          return {
            type: 'h2',
            text: block.replace('## ', ''),
            id: `section-${headerCount++}`,
          };
        }
        return { type: 'p', text: block };
      });
    }
  }
}
