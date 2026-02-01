import { Component } from '@angular/core';
import { BackgroundGridComponent } from '../../../../components/background-grid/background-grid.component';
import { SectionLabelComponent } from '../../../../components/section-label/section-label.component';

@Component({
  selector: 'app-hero-section',
  imports: [BackgroundGridComponent, SectionLabelComponent],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {}
