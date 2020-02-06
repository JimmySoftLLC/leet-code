// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//brute force method
// Time complexity O(n^2)
// Space complexity O(1)
var twoSumBruteForce = function (nums, target) {
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};

var nums = [1, 3, 4, 2];
var target = 6;


// keys method
// Time complexity O(n)
// Space complexity O(n)
var twoSumUsingKeys = function (nums, target) {
    let myMap = new Map();
    for (i = 0; i < nums.length; i++) {
        myMap.set(nums[i], i);
    }
    for (i = 0; i < nums.length - 1; i++) {
        myKey = target - nums[i]
        if (myMap.get(myKey) > 0 && i != myMap.get(myKey)) {
            return [i, myMap.get(myKey)];
        }
    }
    return null;
};

console.log(twoSumBruteForce(nums, target));
console.log(twoSumUsingKeys(nums, target));