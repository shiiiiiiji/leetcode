/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (59.35%)
 * Likes:    501
 * Dislikes: 0
 * Total Accepted:    110.3K
 * Total Submissions: 185.3K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法 1：比较挫，类似于冒泡
// var moveZeroes = function(nums) {
//     if (nums.length < 2) return;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length - 1; j++) {
//             if (nums[j] === 0) {
//                 nums[j] = nums[j + 1];
//                 nums[j + 1] = 0;
//             }
//         } 
//     }
// };

// 方法 2：index
var moveZeroes = nums => {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== j) {
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j++;
        }
    }
}


// @lc code=end

