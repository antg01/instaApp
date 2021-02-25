import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('feeds') feeds: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    comment: [''],
  });

  OnComment(title: string) {
    const comment = this.profileForm.value['comment'];
    // console.log('com', comment);
    this.http
      .put('http://localhost:3000/feeds' + '/' + title, { comment })
      .subscribe((res) => this.getFeeds());
  }

  refresh(): void {
    window.location.reload();
  }

  deleteFeed(title: string) {
    this.http
      .delete('http://localhost:3000/feeds' + '/' + title)
      .subscribe((data) => this.getFeeds());
  }
  getFeeds() {
    this.http
      .get<any>('http://localhost:3000/feeds')
      .subscribe((data) => (this.feeds = data).reverse());
  }

  ngOnInit(): void {}
}
