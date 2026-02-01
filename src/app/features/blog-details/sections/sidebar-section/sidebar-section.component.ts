import { Component, Input, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Post } from '../../../../core/models/post.model';

export interface Toc {
  id: string;
  title: string;
}

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.css'],
  imports: [RouterLinkWithHref],
})
export class SidebarSectionComponent implements OnInit {
  @Input() post!: Post;
  toc: Toc[] = [];
  headerCount: number = 0;

  ngOnInit() {
    this.toc = this.post.content
      .split('\n\n')
      .filter((block) => block.startsWith('## '))
      .map((block) => ({
        id: `section-${this.headerCount++}`,
        title: block.replace('## ', ''),
      }));
  }
}
