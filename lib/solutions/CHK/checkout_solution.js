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
            G: 20,
            H: 10,
            I: 35,
            J: 60,
            K: 70,
            L: 90,
            M: 15,
            N: 40,
            O: 10,
            P: 50,
            Q: 30,
            R: 50,
            S: 20,
            T: 20,
            U: 40,
            V: 50,
            W: 20,
            X: 17,
            Y: 20,
            Z: 21,
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
            ],
            H: [
                { count: 10, price: 80 },
                { count: 5, price: 45 }
            ],
            K: [
                { count: 2, price: 120 }
            ],
            P: [
                { count: 5, price: 200 }
            ],
            Q: [ 
                { count: 3, price: 80 }
            ],
            U: [
                { count: 4, price: 120 }
            ],
            V: [
                { count: 3, price: 130 },
                { count: 2, price: 90 }
            ],
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

        if(counts['N']) {
            const freeMCount = Math.floor(counts['N'] / 3);
            if (counts['M']) {
                counts['M'] = Math.max(0, counts['M'] - freeMCount);
            }
        }

        if(counts['R']) {
            const freeQCount = Math.floor(counts['R'] / 3);
            if (counts['Q']) {
                counts['Q'] = Math.max(0, counts['Q'] - freeQCount);
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
                      count = count % offer.count;
                    }
                }
            }
            cost += count * prices[item];
            return cost;
        }

        const multiBuyItems = ['A', 'B', 'H', 'K', 'P', 'Q', 'V'];
        for (let item of multiBuyItems) {
          if (counts[item]) {
            total += calculateItemCost(item, counts[item]);
          }
        }

        const noSpecialItems = ['C', 'D', 'G', 'I', 'J', 'L', 'O', 'S', 'T', 'W', 'X', 'Y', 'Z'];
        for (let item of noSpecialItems) {
          if (counts[item]) {
            total += counts[item] * prices[item];
          }
        }

        const remainingItems = ['E', 'M', 'N', 'R'];
        for (let item of remainingItems) {
            if (counts[item]) {
              total += counts[item] * prices[item];
            }
          }

        if (counts['F']) {
            const effectiveFCount = counts['F'] - Math.floor(counts['F'] / 3);
            total += effectiveFCount * prices['F'];
        }

        if (counts['U']) {
            const effectiveUCount = counts['U'] - Math.floor(counts['U'] / 4);
            total += effectiveUCount * prices['U'];
        }

        return total;
    }
}

module.exports = CheckoutSolution;

