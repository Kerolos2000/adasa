import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BLOG_DATA } from '../../../../core/data/posts.data';

@Component({
  selector: 'app-filter-section',
  imports: [FormsModule],
  templateUrl: './filter-section.component.html',
})
export class FilterSectionComponent implements OnInit {
  categories = ['الكل', ...BLOG_DATA.categories.map((c) => c.name)];
  selectedCategory = 'الكل';
  searchQuery = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || 'الكل';
      this.searchQuery = params['q'] || '';
    });
  }

  navigateWithParams(params: Params) {
    this.router.navigate([], {
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  onCategorySelect(category: string) {
    this.navigateWithParams({ category: category === 'الكل' ? null : category, page: null });
  }

  onSearch() {
    this.navigateWithParams({ q: this.searchQuery || null, page: null });
  }

  clearFilters() {
    this.navigateWithParams({ category: null, q: null, page: null });
  }
}
