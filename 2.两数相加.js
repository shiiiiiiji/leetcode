/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (36.17%)
 * Likes:    3570
 * Dislikes: 0
 * Total Accepted:    278.6K
 * Total Submissions: 770.1K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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

// var addTwoNumbers = function(l1, l2) {
//     const len = l1.length - l2.length ? l1.length : l2.length;
//     let res = [];
//     for (let i = 0; i < len; i++) {
//         const t = (res[i] || 0) + (l1[i] || 0) + (l2[i] || 0);
//         const ones =  t % 10;
//         const tens =  Math.parseInt(t/10);
//         res[i] = ones;
//         tens && res.push(tens);
//     }
//     console.log('res-->', l1, l2, res);
//     return res;
// };

var addTwoNumbers = function(l1, l2) {
    const num1 = listNode2Array(l1);
    const num2 = listNode2Array(l2);
    const len = num1.length - num2.length ? num1.length : num2.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        const t = (res[0] || 0) + (num1[i] || 0) + (num2[i] || 0);
        const ones =  t % 10;
        const tens =  parseInt(t/10);
        res[0] = ones;
        res.unshift(tens);
        console.log(res);
    }
    return array2ListNode(res);
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function listNode2Array(list) {
    if(!list.value) return [];
    const res = [list.value];
    let next = list.next;
    while (next) {
        res.push(list.next.value);
        next = next.next;
    }
    console.log('tmp arr', res);
    return res;
}

function array2ListNode(arr){
    if(!arr.length) return new ListNode(null);
    const list = new ListNode(arr[0]);
    if(arr.length === 1) {
        list.next = null;
        return list;
    }
    list.next = {};
    let i = 1;
    while(i <= arr.length) {
        const next = list.next;
        next.val = arr[i];
        next.next = i === list.length ? {} : null;
        i++;
    }
    return list;
}
// @lc code=end

