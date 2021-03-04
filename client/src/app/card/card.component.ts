import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('feed') feed: any;

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

  imgSwitch() {
    switch (this.feed.category) {
      case 'desk':
        return 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
      case 'code':
        return 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
      case 'music':
        return 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      case 'travel':
        return 'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80';
      default:
        return 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVmYXVsdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
    }
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
      .subscribe((data) => (this.feed = data).reverse());
  }

  ngOnInit(): void {
    this.imgSwitch();
  }
}
