import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesSectionComponent } from '../sections/categories-section/categories-section.component';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';
import { LatestSectionComponent } from '../sections/latest-section/latest-section.component';
import { SelectedArticlesSectionComponent } from '../sections/selected-articles-section/selected-articles-section.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    LatestSectionComponent,
    SelectedArticlesSectionComponent,
    CategoriesSectionComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
