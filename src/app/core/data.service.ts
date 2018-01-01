import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxJs/Rx';

import { CarouselData } from './../common/gfcarousel/carouseldata';
import { Dealer } from './../dealers/dealer';
import { Product } from './../products/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DealerLocation } from '../dealers/dealer-location';


@Injectable()
export class DataService {

    constructor(private http: Http) { }

    public getHomePageSlides(): Observable<CarouselData[]> {
        return this.http.get('./data/homepage.json')
            .map((res: any) => this.extractData(res) as CarouselData[])
            .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get('./data/products.json')
            .map((res: any) => this.extractData(res) as Product[])
            .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    public getProductTutorials(id: number): Observable<CarouselData[]> {
        return this.http.get('./data/products.json')
            .map((res: any) => res.json())
            .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    public getAllDistributors(): Observable<Dealer[]> {
        return this.http.get('./data/dealers.json')
            .map((res: any) => this.extractData(res) as Dealer[])
            .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    public getDistributorsInCountry(countryId: number): Observable<Dealer[]> {
        return this.http.get('./data/dealers.json')
            .map((res: any) => this.extractData(res) as Dealer[])
            .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private errorHandler(error: any): void {
        console.log(error);
    }
}
