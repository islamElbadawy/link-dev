import { Component } from '@angular/core';
import { NewCategoriesComponent } from '../../../shared/components/new-categories/new-categories.component';
import { NewsCardItemComponent } from '../../../shared/components/news-card-item/news-card-item.component';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [NewCategoriesComponent, NewsCardItemComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {}
