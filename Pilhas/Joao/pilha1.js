// Link: https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets are closed by the same type of brackets.
// 2. Open brackets are closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const matchingOpenBracket = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        const character = s[i];

        if (character === '(' || character === '[' || character === '{') {
            stack.push(character);
            continue;
        }

        const lastOpenBracket = stack.pop();
        if (lastOpenBracket !== matchingOpenBracket[character]) {
            return false;
        }
    }

    return stack.length === 0;
};
