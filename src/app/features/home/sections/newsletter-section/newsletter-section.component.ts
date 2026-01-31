import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-section',
  imports: [FormsModule],
  templateUrl: './newsletter-section.component.html',
})
export class NewsletterSectionComponent {
  email: string = '';

  onSubmit() {
    if (this.email) {
      console.log('Subscribing email:', this.email);
      this.email = '';
      alert('شكراً لاشتراكك في نشرتنا البريدية!');
    }
  }
}
