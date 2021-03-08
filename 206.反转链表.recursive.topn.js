/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */

// 反转链表头n个结点
var reverseList = function(head, n) {
    if (n === 1 || head === null || head.next === null) return head;

    let tail = head.next,
        p = reverseList(head.next, n-1);

    head.next = tail.next;
    tail.next = head;
    return p;
};
// @lc code=end

