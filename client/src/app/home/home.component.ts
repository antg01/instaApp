import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  feedsData: any;
  filterValue: any;
  feeds: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.feeds = [];
  }

  profileForm = this.formBuilder.group({
    title: [''],
    date: [''],
    category: [''],
    description: [''],
  });

  submitedForm() {
    const title = this.profileForm.value['title'];
    const date = this.profileForm.value['date'].toString();
    const category = this.profileForm.value['category'];
    const description = this.profileForm.value['description'];
    // console.log(title, date, category, description);
    this.http
      .post('http://localhost:3000/feeds', {
        title,
        date,
        category,
        description,
      })
      .subscribe((res) => this.getFeeds());
  }

  getFeeds() {
    this.http.get<any>('http://localhost:3000/feeds').subscribe((data) => {
      this.feedsData = data;
      this.feeds = data.map((data: any) => data).reverse();
    });
  }

  ngOnInit(): void {
    this.getFeeds();
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();

    this.feeds = this.feedsData.filter((val: any) => {
      if (filterValue == '') {
        return val;
      } else if (val.category.toLowerCase().includes(filterValue)) {
        return val;
      }
    });
    // console.log(this.feeds);
  }
}
