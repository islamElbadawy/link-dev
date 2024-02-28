import { Pipe, PipeTransform } from '@angular/core';
import { NewsItem } from '../models/news-item';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: NewsItem[], category: number): NewsItem[] {
    if (!items || !category) {
      return items;
    }

    return items.filter((item) => +item.categoryID === category);
  }
}
