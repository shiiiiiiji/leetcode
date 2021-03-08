/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    let result = false;

    let p = head,
        q = head.next;

    while (q !== null && q.next !== null) {
        if (p === q) {
            result = true;
            break;
        }
        p = p.next;
        q = q.next.next;
    }

    return result;
};
// @lc code=end

