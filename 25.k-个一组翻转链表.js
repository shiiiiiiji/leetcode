/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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

// 反转链表头n个结点
function reverseN(head, n) {
    if (n === 1 || head === null || head.next === null) return head;

    let tail = head.next,
        p = reverseN(head.next, n-1);

    head.next = tail.next;
    tail.next = head;
    return p;
};

function _reverseN (head, n) {
    let p = head;
    let count = n;
    while (--n && p)  p = p.next;
    if (p === null) return head;
    return reverseN(head, count);
}

var reverseKGroup = function(head, k) {
    const ret = new ListNode(undefined, head);
    let p = ret,
        q = ret.next;

    while (p.next = _reverseN(q, k)) {
        p = q;
        q = p.next;
    }

    return ret.next;
};
// @lc code=end

