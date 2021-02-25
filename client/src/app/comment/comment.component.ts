import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    comment: [''],
  });

  OnComment() {
    const comment = this.profileForm.value['comment'];
    console.log('com', comment);
    this.http
      .post('http://localhost:3000/comments', { comment })
      .subscribe((res) => this.getComments());
  }

  getComments() {
    this.http
      .get<any>('http://localhost:3000/comments')
      .subscribe((data) => (this.comments = data));
  }

  ngOnInit(): void {
    this.getComments();
  }
}
