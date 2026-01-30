import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Category {
  label: string;
  value: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  fullYear: number = new Date().getFullYear();
  socials: SocialLink[] = [
    { icon: 'fa-x-twitter', url: 'https://twitter.com/', label: 'twitter' },
    { icon: 'fa-github', url: 'https://github.com/', label: 'github' },
    { icon: 'fa-linkedin-in', url: 'https://linkedin.com/', label: 'linkedin' },
    { icon: 'fa-youtube', url: 'https://youtube.com/', label: 'youtube' },
  ];

  exploreLinks: NavLink[] = [
    { label: 'الرئيسية', path: '/' },
    { label: 'المدونة', path: '/blog' },
    { label: 'من نحن', path: '/about' },
  ];

  categories: Category[] = [
    { label: 'إضاءة', value: 'lighting' },
    { label: 'بورتريه', value: 'portrait' },
    { label: 'مناظر طبيعية', value: 'nature' },
    { label: 'تقنيات', value: 'techniques' },
  ];

  bottomLinks: NavLink[] = [
    { label: 'سياسة الخصوصية', path: '/home' },
    { label: 'شروط الخدمة', path: '/home' },
  ];
}
