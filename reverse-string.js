// Write a function that reverses a string. The input string is given as an 
// array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//var character = ["h", "e", "l", "l", "o"];
var character = ["H", "a", "n", "n", "a", "h"];

console.log(character);


// Time complexity O(n)
// Space complexity O(1)
var reverseString = function (s) {
    var leftIndex = 0
    var rightIndex = s.length - 1
    var tempString = "";
    while (leftIndex < rightIndex) {
        tempString = s[leftIndex];
        s[leftIndex] = s[rightIndex];
        s[rightIndex] = tempString;
        leftIndex++;
        rightIndex--;
    }
};

reverseString(character);

console.log(character);