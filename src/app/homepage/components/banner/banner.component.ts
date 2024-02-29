import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { BannerItem } from '../../../shared/models/banner-item';
import { BannerItemComponent } from '../banner-item/banner-item.component';
import { ApiService } from '../../../shared/services/api.service';
import { Slick } from 'ngx-slickjs';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BannerItemComponent, SlickCarouselModule, NgIf],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  items: BannerItem[] = [];

  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  selectedSlide: number = 0;

  slickConfig: Slick.Config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getBannerItems()
      .subscribe((res: any) => (this.items = res.slides));
  }

  goToSlide(index: number) {
    this.setActiveSlide(index);
    this.slickModal.slickGoTo(index);
  }

  setActiveSlide(index: number) {
    console.log(index);

    this.selectedSlide = index;
  }
}
