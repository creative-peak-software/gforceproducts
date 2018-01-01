import { Address } from './address';
import { DealerLocation } from './dealer-location';

export class Dealer {
    public constructor(public dealerInfo: DealerLocation, public website: string,
        public description: string, public locations: DealerLocation[]) { }
}
