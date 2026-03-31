// Link
// https://leetcode.com/problems/remove-linked-list-elements/description/
// Remove Linked List Elements
/*
    Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]
    Example 2:

    Input: head = [], val = 1
    Output: []
    Example 3:

    Input: head = [7,7,7,7], val = 7
    Output: []
    

    Constraints:

    The number of nodes in the list is in the range [0, 104].
    1 <= Node.val <= 50
    0 <= val <= 50
*/

// CÓDIGO

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Solution {
    constructor() {
        this.head = null;
    }

    removeElements(head, val) {
        const dummy = new Node(0);
        dummy.next = head;
        let current = dummy;

        while (current.next !== null) {
            if (current.next.value === val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return dummy.next;
    }
}
        