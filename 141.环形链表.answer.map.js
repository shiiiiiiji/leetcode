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
    let p = head;
    let result = false;

    // 记录链表地址，注意这里不能简单用 {}，因为对象的 key 必须是字符串
    let map = new Map;

    while (p !== null) {
        if (map.has(p)) {
            console.log(map);
            result = true;
            break;
        }
        map.set(p, true);
        p = p.next;
    }

    return result;
};
// @lc code=end

