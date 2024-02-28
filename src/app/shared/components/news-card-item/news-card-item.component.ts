import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';
import { DatePipe } from '@angular/common';
import { CategoryItem } from '../../models/category-item';

@Component({
  selector: 'app-news-card-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './news-card-item.component.html',
  styleUrl: './news-card-item.component.scss',
})
export class NewsCardItemComponent {
  @Input()
  item!: NewsItem;
}
