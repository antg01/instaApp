import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatadbService {
  feeds: any;

  constructor(private http: HttpClient) {}

  getAllFeeds() {
    this.http
      .get<any>('http://localhost:3000/feeds')
      .subscribe((data) => (this.feeds = data));
    console.log('test', this.feeds);
  }
}
