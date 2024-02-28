import { Pipe, PipeTransform } from '@angular/core';
import { CategoryItem } from '../models/category-item';

@Pipe({
  name: 'parseCategory',
  standalone: true,
})
export class ParseCategoryPipe implements PipeTransform {
  transform(items: CategoryItem[], id: number): string | undefined {
    if (!items || !id) {
      return '';
    }

    return items.find((item) => item.id === id)?.name;
  }
}
