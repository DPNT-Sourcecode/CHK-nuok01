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
            E: 40,
            F: 10,
        }
        
        // specials
        const specials = {
            A: [
                { count: 5, price: 200 },
                { count: 3, price: 130 },
            ],
            B: [
                { count: 2, price: 45 }
            ],
            F: [
                { count: 3, price: 20 }
            ]
        }
        
        // counts items in "basket"
        const counts = {}

        // iterate over items in "basket" to count items
        if(typeof skus !== 'string') {
            return -1;
        }
        for ( let sku of skus ) {
            if(!prices.hasOwnProperty(sku)) {
                return -1;
            }

            counts[sku] = (counts[sku] || 0) + 1;
        }

        // Apply free Bs with Es
        if(counts['E']) {
            const freeBCount = Math.floor(counts['E'] / 2);
            if (counts['B']) {
                counts['B'] = Math.max(0, counts['B'] - freeBCount);
            }
        }

        // calculate total
        let total = 0;

        function calculateItemCost(item, count) {
            let cost = 0;
            if (specials.hasOwnProperty(item)) {
                for (let offer of specials[item]) {
                    if (count >= offer.count) {
                      let numOffers = Math.floor(count / offer.count);
                      cost += numOffers * offer.price;
                      count -= numOffers * offer.count;
                    }
                }
            }
            cost += count * prices[item];
            return cost;
        }

        if (counts['A']) {
            total += calculateItemCost('A', counts['A']);
        }

        if (counts['B']) {
            total += calculateItemCost('B', counts['B']);
        }

        if (counts['C']) {
            total += counts['C'] * prices['C'];
        }

        if (counts['D']) {
            total += counts['D'] * prices['D'];
        }

        if (counts['E']) {
            total += calculateItemCost('E', counts['E']);
        }

        if (counts['F']) {
            const effectiveFCount = counts['F'] - Math.floor(counts['F'] / 3);
            total += effectiveFCount * prices['F'];
        }

        return total;
    }
}

module.exports = CheckoutSolution;




