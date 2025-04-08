'use strict';

class CheckoutSolution {
    // skus is expected to be a string
    
    checkout(skus) {
        // prices
        const prices = {
            A: 50,
            B: 30,
            C: 20,
            D: 15,
        }
        
        // specials
        const specials = {
            A: { count: 3, price: 130 },
            B: { count: 2, price: 45 },
        }
        
        // counts items in "basket"
        const counts = {}

        // iterate over items in "basket" to count items
        for ( let sku of skus ) {
            if(!prices.hasOwnProperty(sku)) {
                return -1;
            }

            counts[sku] = (counts[sku] || 0) + 1;
        }

        // calculate total
        let total = 0;

        for ( let sku in counts ) {
            const count = counts[sku];
            
            if(specials.hasOwnProperty(sku)) {
                const { count: offerCount, price: offerPrice} = specials[sku];
                const numOffers = Math.floor(count / offerCount);
                const remainder = count % offerCount;
                total += numOffers * offerPrice + remainder * prices[sku];
            } else {
                total += count * prices[sku];
            }
        }
        return total;
    }
}

module.exports = new CheckoutSolution().checkout;

