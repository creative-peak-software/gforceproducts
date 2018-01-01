import { Component, OnInit } from '@angular/core';

import { CarouselData } from './../../common/gfcarousel/carouseldata';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeSlides: CarouselData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHomePageSlides().subscribe(result => this.homeSlides = result);
  }
}
