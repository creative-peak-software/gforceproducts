import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxJs/Rx';

import { Dealer } from '../dealer';
import { DataService } from './../../core/data.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  public dealers: Dealer[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllDealers();
  }

  private getDealersInCountry(countryId: number): void {
    this.dataService.getDistributorsInCountry(countryId).subscribe(d => this.dealers = d);
  }

  private getAllDealers(): void {
    this.dataService.getAllDistributors().subscribe(d => {
      console.log(d);
      this.dealers = d;
      console.log('dealers:');
      console.log(this.dealers);
    });
  }

  private searchForDealers(zip: string): void {
    this.dealers = null;
  }
}
