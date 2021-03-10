/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;

    const ret = new ListNode(undefined, head);
    let p = ret,
        q;

    while (p.next) {
        if (p.next.next && p.next.val === p.next.next.val) {
            q = p.next.next;
            while (q && q.val === p.next.val) q = q.next;
            p.next = q; 
        } else {
            p = p.next;
        }
    }
    return ret.next;
};
// @lc code=end

