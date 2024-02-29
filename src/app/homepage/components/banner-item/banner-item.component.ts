import { Component, Input } from '@angular/core';
import { BannerItem } from '../../../shared/models/banner-item';

@Component({
  selector: 'app-banner-item',
  standalone: true,
  imports: [],
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss',
})
export class BannerItemComponent {
  @Input('item') item: BannerItem | undefined;

  ngOnInit() {
    if (this.item) {
      this.item.imgUrl = String(this.item.id + 1);
    }
  }
}
