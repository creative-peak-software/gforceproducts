import { Address } from './address';
import { Dealer } from './dealer';

export class DealerLocation {
    public constructor (public name: string, public address: Address, public phone: string,
        public fax: string, public email: string) {}
}
