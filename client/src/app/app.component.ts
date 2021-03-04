import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'insta';
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    title: [''],
    date: [''],
    category: [''],
    description: [''],
  });
}
