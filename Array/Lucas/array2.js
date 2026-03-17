// Link: https://leetcode.com/problems/beautiful-array/description/

// An array nums of length n is beautiful if:

// nums is a permutation of the integers in the range [1, n].
// For every 0 <= i < j < n, there is no index k with i < k < j where 2 * nums[k] == nums[i] + nums[j].
// Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n.

 

// Example 1:

// Input: n = 4
// Output: [2,1,4,3]
// Example 2:

// Input: n = 5
// Output: [3,1,2,5,4]

/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    let resultado = [1];

    // Enquanto o array não tiver todos os números de 1 a n
    while (resultado.length < n) {
        let proximo = [];

        // Adiciona as transformações ímpares: 2x - 1
        for (let x of resultado) {
            if (2 * x - 1 <= n) {
                proximo.push(2 * x - 1);
            }
        }

        // Adiciona as transformações pares: 2x
        for (let x of resultado) {
            if (2 * x <= n) {
                proximo.push(2 * x);
            }
        }

        resultado = proximo;
    }

    return resultado;
};