import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryItem } from '../../models/category-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-categories',
  standalone: true,
  imports: [],
  templateUrl: './new-categories.component.html',
  styleUrl: './new-categories.component.scss',
})
export class NewCategoriesComponent {
  categories: CategoryItem[] = [];
  selectedCat: number = 0;

  @Output() selectCategory = new EventEmitter<number>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe((res: any) => {
      this.categories = res.newsCategory;
    });
  }

  selectCat(id: number) {
    this.selectedCat = id;
    this.selectCategory.emit(id);
  }
}
