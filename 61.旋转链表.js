/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null) return head;

    let n = 1,
        p = head;

    // 指向尾结点
    while (p.next) p = p.next, n++;

    // 成环
    p.next = head;

    k %= n;
    k = n - k;
    
    while (k--) p = p.next;

    head = p.next;
    p.next = null;

    return head;
};
// @lc code=end

