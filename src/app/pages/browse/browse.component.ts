import { Component, OnInit } from '@angular/core';
import { portfolioItems } from '../../models/test-data';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items: any[] = portfolioItems;
  portfolioCount: number[] = [1,2,3,4,5,6,7,8];

}
