import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionLabelComponent } from '../../../../components/section-label/section-label.component';

interface Category {
  title: string;
  count: number;
  icon: string;
  delay: number;
}

@Component({
  selector: 'app-categories-section',
  imports: [RouterLink, SectionLabelComponent],
  templateUrl: './categories-section.component.html',
})
export class CategoriesSectionComponent {
  categories: Category[] = [
    {
      title: 'إضاءة',
      count: 3,
      icon: 'fa-sun',
      delay: 0,
    },
    {
      title: 'بورتريه',
      count: 3,
      icon: 'fa-user',
      delay: 100,
    },
    {
      title: 'مناظر طبيعية',
      count: 2,
      icon: 'fa-mountain-sun',
      delay: 200,
    },
    {
      title: 'تقنيات',
      count: 5,
      icon: 'fa-sliders',
      delay: 300,
    },
    {
      title: 'معدات',
      count: 3,
      icon: 'fa-camera',
      delay: 400,
    },
  ];
}
