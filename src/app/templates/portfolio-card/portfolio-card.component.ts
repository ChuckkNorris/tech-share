import { Component, OnInit, Input } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio';
@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {
  @Input() item: PortfolioItem;
  constructor() { }

  ngOnInit() {
  }

}
