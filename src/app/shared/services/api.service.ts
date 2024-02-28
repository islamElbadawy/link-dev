import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBannerItems() {
    return this.http.get('https://api.npoint.io/fee177346e7875554413#');
  }

  getCategories() {
    return this.http.get('https://api.npoint.io/91298d970c27e9a06518');
  }

  getNewsList() {
    return this.http.get('https://api.npoint.io/d275425a434e02acf2f7');
  }

  getNewsItem(id: any) {
    return this.http.get(
      'https://api.npoint.io/d275425a434e02acf2f7/News/',
      id
    );
  }
}
