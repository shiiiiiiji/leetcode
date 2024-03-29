/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let p = q = head;
    do {
        p = p.next;
        q = q.next.next;
    } while (p !== q && q !== null && q.next !== null);

    if (p !== q) return null;   // 无环

    p = head;
    while (p !== q) {
        p = p.next;
        q = q.next;
    }

    return p;
};
// @lc code=end

