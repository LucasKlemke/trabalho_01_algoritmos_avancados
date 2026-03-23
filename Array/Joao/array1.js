// Link: https://leetcode.com/problems/product-of-array-except-self/

// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// You must write an algorithm that runs in O(n) time and without using division.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = new Array(nums.length).fill(1);

    // Prefixo: produto de todos os elementos antes de i
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Sufixo: multiplique pelo produto de todos os elementos depois de i
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
};
