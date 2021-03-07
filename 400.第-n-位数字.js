/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    const arrStr = Array.from({length: n}, (v,k) => k+1).join("");
    return arrStr[n];
};
// @lc code=end

