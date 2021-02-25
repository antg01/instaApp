import { Component, OnInit, Input } from '@angular/core';
import { DatadbService } from './../datadb.service';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  id: number;
  title: string;
  date: Date;
  url: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  feeds: any;
  displayedColumns: string[] = ['id', 'title', 'date', 'url'];

  constructor(private http: HttpClient, public datadbService: DatadbService) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/feeds').subscribe((data) => {
      this.feeds = data;
      // console.log(this.feeds);
    });
  }
}
