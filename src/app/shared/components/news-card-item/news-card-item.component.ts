import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';
import { DatePipe } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { CategoryItem } from '../../models/category-item';
import { ParseCategoryPipe } from '../../pipes/parse-category.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-card-item',
  standalone: true,
  imports: [DatePipe, NgxBootstrapIconsModule, ParseCategoryPipe, RouterModule],
  templateUrl: './news-card-item.component.html',
  styleUrl: './news-card-item.component.scss',
})
export class NewsCardItemComponent {
  @Input()
  item!: NewsItem;
  isFav: boolean = false;
  isSocial: boolean = false;

  @Input()
  categories!: CategoryItem[];

  constructor() {}

  setFav(isFav: boolean) {
    this.isFav = isFav;
  }

  toggleSocial() {
    this.isSocial = !this.isSocial;
  }
}
