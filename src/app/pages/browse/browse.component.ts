import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  portfolioCount: number[] = [1,2,3,4,5,6,7,8];

}
