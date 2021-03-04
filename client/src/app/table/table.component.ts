import { Component, OnInit, Input } from '@angular/core';
import { DatadbService } from './../datadb.service';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  // id: number;
  title: string;
  date: Date;
  category: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  feeds: any;
  filterValue: any;
  newFeeds: any;
  displayedColumns: string[] = ['title', 'date', 'category'];

  constructor(private http: HttpClient, public datadbService: DatadbService) {}

  imgSwitchTable() {
    switch (this.feeds.category) {
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

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/feeds').subscribe((data) => {
      this.feeds = data;
      // console.log(this.feeds);
    });
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();

    const newFeeds = this.feeds.filter((val: any) => {
      if (filterValue == '') {
        return val;
      } else if (
        val.category.toLowerCase().includes(filterValue.toLowerCase())
      ) {
        return val;
      }
    });
    console.log(filterValue, newFeeds);
  }
}
