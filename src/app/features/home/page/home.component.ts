import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HeroSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
