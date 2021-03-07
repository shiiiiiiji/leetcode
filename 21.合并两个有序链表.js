/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (58.68%)
 * Likes:    763
 * Dislikes: 0
 * Total Accepted:    154.4K
 * Total Submissions: 262.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let l = new ListNode(null),
        n = new ListNode(null);
        i = 0;
        n1 = l1.next,
        n2 = l2.next;

        console.log(l, n);
        
        
    l.value = l1.value;
    l.next = n;
    while (n1 && n2) {
        n.value = new ListNode(i % 2 === 0 ? n2.value : n1.value);
        n1 = n1.next;
        n2 = n2.next;
        n = n.next;
        i++;
    }
    if (n1) n.value = new ListNode(n1.value);
    if (n2) n.value = new ListNode(n2.value);
    return l;
};

function array2List(arr) {
    let l = new ListNode();
    let t = l;
    arr.forEach(item => {
        t.val = item;
        t = t.next = {};
    });
    t = null;
    return l;
}
// @lc code=end

