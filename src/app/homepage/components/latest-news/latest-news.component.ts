import { Component } from '@angular/core';
import { NewCategoriesComponent } from '../../../shared/components/new-categories/new-categories.component';
import { NewsCardItemComponent } from '../../../shared/components/news-card-item/news-card-item.component';
import { ApiService } from '../../../shared/services/api.service';
import { NewsItem } from '../../../shared/models/news-item';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [NewCategoriesComponent, NewsCardItemComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  selecetedCategory!: number;
  news!: NewsItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getNewsList()
      .pipe(
        map((res: any) => {
          const news = res.News.filter(
            (item: NewsItem) => item.showOnHomepage == 'yes'
          );
          return news;
        })
      )
      .subscribe((items: NewsItem[]) => (this.news = items));
  }

  setSelectedCat(id: number) {
    this.selecetedCategory = id;
  }
}
