// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell 
// one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// **
// * @param {number[]} prices
// * @return {number}
// */

// var prices = [7, 1, 5, 3, 6, 4]
// var prices = [7, 6, 4, 3, 1]
var prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]


// brute force method
// Time complexity O(n^2)
// Space complexity O(1)
var maxProfitBruteForce = function (prices) {
    var maxProfit = 0
    for (i = 0; i < prices.length - 1; i++) {
        for (j = i; j < prices.length; j++) {
            if (maxProfit < prices[j] - prices[i]) {
                maxProfit = prices[j] - prices[i]
            }
        }
    }
    return maxProfit;
};

// current profit lowest valley followed by highest peak method
// Time complexity O(n)
// Space complexity O(1)
var maxProfitPositiveCurrentProfit = function (prices) {
    var maxProfitLocal = 0;
    var minPrice = Number.MAX_SAFE_INTEGER;
    for (i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else if (maxProfitLocal < prices[i] - minPrice) {
            maxProfitLocal = prices[i] - minPrice;
        }
    }
    return maxProfitLocal;
};

console.log(maxProfitBruteForce(prices));
console.log(maxProfitPositiveCurrentProfit(prices));