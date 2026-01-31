import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BLOG_DATA } from '../../../../core/data/posts.data';
import { Post } from '../../../../core/models/post.model';
import { BlogPostCardComponent } from '../../../../shared/components/blog-post-card/blog-post-card.component';

@Component({
  selector: 'app-blog-list-section',
  imports: [BlogPostCardComponent],
  templateUrl: './blog-list-section.component.html',
})
export class BlogListSectionComponent implements OnInit {
  allPosts: Post[] = BLOG_DATA.posts;
  selectedCategory = 'الكل';
  searchQuery = '';
  viewMode: 'grid' | 'list' = 'grid';
  currentPage = 1;
  pageSize = 6;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || 'الكل';
      this.searchQuery = params['q'] || '';
      this.currentPage = +(params['page'] || 1);
    });
  }

  get filteredPosts() {
    return this.allPosts.filter((post) => {
      const matchesCategory =
        this.selectedCategory === 'الكل' || post.category === this.selectedCategory;
      const matchesSearch =
        !this.searchQuery ||
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  get totalPages() {
    return Math.ceil(this.filteredPosts.length / this.pageSize) || 1;
  }

  get paginatedPosts() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPosts.slice(start, start + this.pageSize);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  navigateWithParams(params: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.navigateWithParams({ page: page === 1 ? null : page });
    }
  }

  toggleView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  clearFilters() {
    this.navigateWithParams({ category: null, q: null, page: null });
  }
}
