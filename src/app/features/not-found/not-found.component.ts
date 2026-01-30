import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackgroundGridComponent } from '../../shared/components/background-grid/background-grid.component';

@Component({
  selector: 'app-not-found',
  imports: [BackgroundGridComponent, RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
