// Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    let positions = []
    let foundFirstPosition = false
    let foundLastPosition = false

    for(i = 0; i < nums.length; i++){
        let next = nums[i+1];

        //Caso tenha achado o primeiro
        if(nums[i] === target && !foundFirstPosition){
            foundFirstPosition = true

            // Adiciona posição do primeiro target encontrado no array
            positions.push(i)

            // Se o próximo número da lista não for igual ao target, quer dizer que 
            // a posição inicial é igual a posição final
            if(next != target){
                foundLastPosition = true
                positions.push(i)
            }

         } else if (foundFirstPosition && !foundLastPosition && next != target  ){
            // Quando achou posição inicial, percorre array até achar posição final
            // onde para de se repetir
            foundLastPosition = true;

            // Ao encontrar, adiciona posição do último target encontrada no array
            positions.push(i)
         }
    }
    
    // Caso não tenha encontrado target, retorna [-1,-1]
    if(positions.length == 0){
        return[-1,-1]
    } else {
        return positions
    }
};
