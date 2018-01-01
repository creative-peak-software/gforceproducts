import { CarouselData } from './carouseldata';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gf-carousel',
  templateUrl: './gfcarousel.component.html',
  styleUrls: ['./gfcarousel.component.css']
})
export class GfCarouselComponent implements OnInit {
  @Input() slideData: CarouselData[];

  constructor() { }

  ngOnInit() {
    if (this.slideData === undefined) {
      console.log('error');
    }
  }
}
