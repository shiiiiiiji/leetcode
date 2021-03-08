/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

 function reverseN(head, n) {
    if (n === 1 || head === null || head.next === null) return head;

    let tail = head.next,
        p = reverseList(head.next, n-1);

    head.next = tail.next;
    tail.next = head;
    return p;
};

var reverseBetween = function(head, left, right) {
    const ret = new ListNode(undefined, head);  // 虚拟头结点
    let p = ret;
    const count = right - left + 1;
    while (--left) p = p.next;
    p.next = reverseN(p.next, count);
    return ret.next;
};
// @lc code=end

