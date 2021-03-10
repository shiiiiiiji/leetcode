/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext (n) {
        let res = 0;
        while (n) {
            let i = n % 10;
            n = (n - i) / 10;
            res += i * i;
        }
        return res;
    }

    let p = q = n;

    do {
        p = getNext(p);
        q = getNext(getNext(q));
    } while (p !== q);

    return p === 1;
};
// @lc code=end


let i = 0; j = 0;
while (true) {
    i++;
    if (i > 100000) break;
    if (isHappy(i)) j+= i;
}

console.log(j);
