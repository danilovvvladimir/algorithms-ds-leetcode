"use strict";
// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
function isPalindrome(x) {
    return x.toString() === x.toString().split("").reverse().join("");
}
