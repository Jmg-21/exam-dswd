import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.scss'],
})
export class FetchApiComponent implements OnInit {
  constructor(public http: ApiService) {}

  regions: any = [];

  ngOnInit(): void {
    this.http.getRegion().subscribe((data) => {
      this.regions = data;
    });
  }
}
