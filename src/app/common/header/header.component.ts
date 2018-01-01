import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../core/data.service';

import { Product } from '../../products/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private productList: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllProducts().subscribe(p => this.productList = p);
  }

  private getRouterLink(productId: string) {
    return 'product/' + productId;
  }
}
