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
var reverseList = function(head) {
    if (head === null) return head;
    
    let pre = null,         // 反转头
        cur = head,         // 未反转头
        nxt = cur.next;

    while (true) {
        cur.next = pre;
        pre = cur;
        cur = nxt;
        if (cur === null) break;
        nxt = cur.next;
    }

    return pre;

};
// @lc code=end

