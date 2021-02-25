import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  feeds: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient // public datadbService: DatadbService
  ) {}

  profileForm = this.formBuilder.group({
    title: [''],
    date: [''],
    url: [''],
    description: [''],
  });

  submitedForm() {
    const title = this.profileForm.value['title'];
    const date = this.profileForm.value['date'];
    const url = this.profileForm.value['url'];
    const description = this.profileForm.value['description'];
    // console.log(title, date, url, description);
    this.http
      .post('http://localhost:3000/feeds', { title, date, url, description })
      .subscribe((res) => this.getFeeds());
  }

  getFeeds() {
    this.http
      .get<any>('http://localhost:3000/feeds')
      .subscribe((data) => (this.feeds = data).reverse());
  }

  ngOnInit(): void {
    this.getFeeds();
  }
}
