import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenary',
  templateUrl: './tenary.component.html',
  styleUrls: ['./tenary.component.scss'],
})
export class TenaryComponent implements OnInit {
  data = {
    physical_status_id: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
