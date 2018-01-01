import { CarouselData } from './../common/gfcarousel/carouseldata';

export class Product {
    constructor (public id: string, public name: string, public slides: CarouselData[], public mainCopy: string, public imgUrl: string) {}
}
