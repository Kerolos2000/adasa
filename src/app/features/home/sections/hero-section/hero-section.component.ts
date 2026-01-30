import { Component } from '@angular/core';
import { BackgroundGridComponent } from '../../../../shared/components/background-grid/background-grid.component';
import { SectionLabelComponent } from '../../../../shared/components/section-label/section-label.component';

export interface HeroButton {
  label: string;
  icon?: string;
  href: string;
  type: 'main' | 'secondary';
  rotate?: boolean;
}

export interface HeroStat {
  icon: string;
  value: string;
  label: string;
  delay: number;
}

@Component({
  selector: 'app-hero-section',
  imports: [BackgroundGridComponent, SectionLabelComponent],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  buttons: HeroButton[] = [
    { label: 'استكشف المقالات', href: '/blog', type: 'main', icon: 'fa-arrow-right', rotate: true },
    { label: 'اعرف المزيد', href: '/about', type: 'secondary', icon: 'fa-circle-info' },
  ];

  stats: HeroStat[] = [
    { icon: 'fa-newspaper', value: '+50', label: 'مقالة', delay: 0 },
    { icon: 'fa-users', value: '+10ألف', label: 'قارئ', delay: 100 },
    { icon: 'fa-folder-open', value: '4', label: 'تصنيفات', delay: 200 },
    { icon: 'fa-pen-nib', value: '6', label: 'كاتب', delay: 300 },
  ];
}
