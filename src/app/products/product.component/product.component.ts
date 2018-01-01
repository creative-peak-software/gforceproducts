import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product.component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => this.updateProduct(p['productId']));
  }

  private updateProduct(newId: string): void {
    if (newId === '' || newId === undefined) {
      this.product = null;
    } else {
      this.dataService.getAllProducts().subscribe(ps => {
        console.log(ps);
        if (ps !== undefined && ps !== null && ps.length > 0) {
          this.product = ps.find(p => p.id === newId);
        }
      });
    }
  }
}
