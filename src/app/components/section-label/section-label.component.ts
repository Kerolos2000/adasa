import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  imports: [],
  templateUrl: './section-label.component.html',
})
export class SectionLabelComponent {
  @Input() label: string = '';
}
