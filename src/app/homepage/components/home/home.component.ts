import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ThingsWeDoComponent } from '../things-we-do/things-we-do.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ThingsWeDoComponent, LatestNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
