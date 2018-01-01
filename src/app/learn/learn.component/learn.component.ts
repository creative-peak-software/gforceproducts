import { Component, OnInit } from '@angular/core';

import { DataService } from './../../core/data.service';
import { Product } from '../../products/product';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  public products: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllProducts().subscribe(ps => this.products = ps);
  }

}
